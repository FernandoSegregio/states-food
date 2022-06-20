import React, { useState, useEffect, useContext } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { getItems } from '../../services/axiosRequest';
import {
  CardRestaurant,
  DescriptionRestaurant,
  RestaurantContainer,
  FlagImg,
  NameRestaurant,
  RestaurantImg,
  TextContainer,
} from './style';
import StatesFoodsContext from '../../context/StatesFoodsContext';

function Restaurants() {
  const [restaurant, setRestaurant] = useState([]);
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const { filtered } = useContext(StatesFoodsContext);

  const navigate = useNavigate();

  async function requestItems() {
    const token = JSON.parse(localStorage.getItem('token'));
    const item = await getItems('/restaurant', token);
    setRestaurant([...item]);

    const food = await getItems('/restaurant/food', token);
    setFoods([...food]);
    const drink = await getItems('/restaurant/drink', token);
    setDrinks([...drink]);
  }

  useEffect(() => {
    requestItems();
    console.log(foods);
  }, []);

  const searchItems = Array.of(...restaurant, ...foods, ...drinks);

  const filter = searchItems.filter((item) => item.name.toLowerCase().includes(filtered)
  || item.description.toLowerCase().includes(filtered));

  const schemaFilter = {
    false: filter,
    true: restaurant,
  };

  return (
    <RestaurantContainer>
      { restaurant && schemaFilter[filtered.length === 0].map(
        ({
          url_image: imageUrl, description, flag, name, rate, time, delivery, id,
        }) => (
          <CardRestaurant key={nanoid()} onClick={() => navigate(`/restaurants/${id}`)}>
            <RestaurantImg src={imageUrl} alt={name} />
            <div>
              { flag && <FlagImg src={flag} alt="" />}
              <TextContainer>
                <NameRestaurant>{name}</NameRestaurant>
                <DescriptionRestaurant>{description}</DescriptionRestaurant>
                <div>
                  <div>
                    { rate && <span className="iconify" data-icon="ep:star-filled" />}
                    <span>{rate}</span>
                  </div>
                  <div>
                    { time && <span className="iconify" data-icon="ic:outline-watch-later" />}
                    <span>{time}</span>
                  </div>
                  <div>
                    { delivery && <span className="iconify delivery" data-icon="iconoir:delivery-truck" />}
                    <span>{delivery}</span>
                  </div>
                </div>
              </TextContainer>
            </div>
          </CardRestaurant>
        ),
      )}
    </RestaurantContainer>
  );
}

export default Restaurants;

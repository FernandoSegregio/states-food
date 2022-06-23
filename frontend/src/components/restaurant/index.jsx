import React, { useState, useEffect, useContext } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';
import { getItems } from '../../services/axiosRequest';
import {
  CardRestaurant,
  DescriptionRestaurant,
  RestaurantContainer,
  FlagImg,
  NameRestaurant,
  RestaurantImg,
  TextContainer,
  DetailsRestaurant,
  Rate,
  Time,
  Delivery,
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

  const filter = searchItems
    .filter((item) => item.name.toLowerCase()
      .includes(filtered.toLowerCase())
  || item.description.toLowerCase()
    .includes(filtered.toLowerCase()));

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

            <div className="title-and_flag">
              { flag && <FlagImg src={flag} alt="" />}
              <TextContainer>
                <NameRestaurant>{name}</NameRestaurant>
                <DescriptionRestaurant>{description}</DescriptionRestaurant>
                {rate && time && delivery && (
                <DetailsRestaurant>
                  <Rate>
                    <AiFillStar />
                    <span>{rate}</span>
                  </Rate>
                  <Time>
                    <BiTime />
                    <span>{time}</span>
                  </Time>
                  <Delivery>
                    <TbTruckDelivery className="delivery" />
                    <span>{delivery}</span>
                  </Delivery>
                </DetailsRestaurant>
                )}

              </TextContainer>
            </div>

          </CardRestaurant>
        ),
      )}
    </RestaurantContainer>
  );
}

export default Restaurants;

import React, { useState, useEffect } from 'react';
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

function Restaurants() {
  const [restaurant, setRestaurant] = useState([]);

  const navigate = useNavigate();

  async function requestItems() {
    const token = JSON.parse(localStorage.getItem('token'));
    const item = await getItems('/restaurant', token);
    setRestaurant([...item]);
  }

  useEffect(() => {
    requestItems();
  }, []);

  return (
    <RestaurantContainer>
      { restaurant && restaurant.map(({
        url_image: imageUrl, description, flag, name, rate, time, delivery, id,
      }) => (
        <CardRestaurant key={nanoid()} onClick={() => navigate(`/restaurants/${id}`)}>
          <RestaurantImg src={imageUrl} alt={name} />
          <div>
            <FlagImg src={flag} alt="" />
            <TextContainer>
              <NameRestaurant>{name}</NameRestaurant>
              <DescriptionRestaurant>{description}</DescriptionRestaurant>
              <div>
                <div>
                  <span className="iconify" data-icon="ep:star-filled" />
                  <span>{rate}</span>
                </div>
                <div>
                  <span className="iconify" data-icon="ic:outline-watch-later" />
                  <span>{time}</span>
                </div>
                <div>
                  <span className="iconify delivery" data-icon="iconoir:delivery-truck" />
                  <span>{delivery}</span>
                </div>
              </div>
            </TextContainer>
          </div>
        </CardRestaurant>
      ))}
    </RestaurantContainer>
  );
}

export default Restaurants;

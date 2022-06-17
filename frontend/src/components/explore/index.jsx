import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import getItems from '../../services/axiosRequest';
import {
  CardRestaurant,
  DescriptionRestaurant,
  ExploreContainer,
  FlagImg,
  NameRestaurant,
  RestaurantImg,
  TextContainer,
} from './style';

function Explore() {
  const [restaurant, setRestaurant] = useState([]);

  async function requestItems() {
    const item = await getItems('/restaurant');
    setRestaurant([...item]);
    console.log(item);
  }

  useEffect(() => {
    requestItems();
  }, []);

  return (
    <ExploreContainer>
      { restaurant.length && restaurant.map(({
        url_image: imageUrl, description, flag, name, rate, time, delivery,
      }) => (
        <CardRestaurant key={nanoid()}>
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
    </ExploreContainer>
  );
}

export default Explore;

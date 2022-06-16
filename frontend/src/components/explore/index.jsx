import React from 'react';
import mockRest from './mock';
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
  return (
    <ExploreContainer>
      { mockRest.map(({
        image, description, flag, name, rate, time, delivery,
      }) => (
        <CardRestaurant>
          <RestaurantImg src={image} alt={name} />
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

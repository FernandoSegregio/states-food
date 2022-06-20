import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import {
  MenuContainer,
  RestaurantImgMenu,
  Menu,
  TextContainerTitleMenu,
  FlagImgMenu,
  NameRestaurantMenu,
  DescriptionRestaurantMenu,
  Carousel,
  CardMeal,
  TextCard,
  Details,
} from './style';
import { getItems } from '../../services/axiosRequest';

function MenuMeals() {
  const [restaurant, setRestaurant] = useState([]);
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const location = useLocation();

  const id = location.pathname.split('/')[2];

  async function requestItems() {
    const token = JSON.parse(localStorage.getItem('token'));
    const item = await getItems('/restaurant', token);
    const food = await getItems(`/restaurant/food/${id}`, token);
    const drink = await getItems(`/restaurant/drink/${id}`, token);
    console.log(drink);
    setRestaurant([...item]);
    setFoods([...food]);
    setDrinks([...drink]);
  }

  useEffect(() => {
    requestItems();
  }, []);

  const index = id - 1;

  return (
    <MenuContainer>
      {restaurant[1] && (
      <>
        <RestaurantImgMenu src={restaurant[index].url_image} alt={restaurant[index].name} />
        <div>
          <FlagImgMenu src={restaurant[index].flag} alt="" />
          <TextContainerTitleMenu>
            <NameRestaurantMenu>{restaurant[index].name}</NameRestaurantMenu>
            <DescriptionRestaurantMenu>{restaurant[index].description}</DescriptionRestaurantMenu>
          </TextContainerTitleMenu>
        </div>
      </>
      )}
      <Menu>
        <p>Pratos</p>
        <Carousel>
          { foods.length > 0 && foods.map(({
            url_image: imgMeal, name, description, price,
          }) => (
            <CardMeal key={nanoid()}>
              <img src={imgMeal} alt="" />
              <Details>
                <TextCard>
                  <h1>{name}</h1>
                  <p>{description}</p>
                </TextCard>
                <p>{price}</p>
              </Details>
            </CardMeal>
          ))}
        </Carousel>
        <p>Bebidas</p>
        <Carousel>
          { drinks.length > 0 && drinks.map(({
            url_image: imgMeal, name, description, price,
          }) => (
            <CardMeal key={nanoid()}>
              <img src={imgMeal} alt="" />
              <Details>
                <TextCard>
                  <h1>{name}</h1>
                  <p>{description}</p>
                </TextCard>
                <p>{price}</p>
              </Details>
            </CardMeal>
          ))}
        </Carousel>
      </Menu>
    </MenuContainer>
  );
}

export default MenuMeals;

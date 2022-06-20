import styled from 'styled-components';
import {
  RestaurantImg,
  TextContainer,
  FlagImg,
  NameRestaurant,
  DescriptionRestaurant,
} from '../restaurant/style';

export const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const Menu = styled.section`
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 25%);
  margin-top: 12px;


  p {
      color: #808080;
      margin-left: 5.5%;
      margin-top: 20px;
    }
`;

export const Carousel = styled.div`
  padding-top: 14px;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  display: flex;
`;

export const CardMeal = styled.div`
  box-shadow: 0px 0px 5px 0 rgb(0 0 0 / 50%);
  border-radius: 6px;
  display: inline-block;
  height: 210px;
  margin-bottom: 20px;
  margin-left: 22px;
  padding: 10px;
  width: 50%;

    img {
      height: 140px;
      object-fit: cover;
      object-position: center 20%;
      width: 100%;
    }
`;

export const RestaurantImgMenu = styled(RestaurantImg)`
  height: 110px;
`;

export const TextContainerTitleMenu = styled(TextContainer)`
  align-items: center;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 25%);
  color: #808080;
  display: flex;
  padding: 4%;
  text-align: center;
  position: relative;
  width: 100%;
`;

export const FlagImgMenu = styled(FlagImg)`
position: absolute;
  z-index: 2;
  left: 5%;
`;

export const NameRestaurantMenu = styled(NameRestaurant)`
  font-size: var(--font-size-s);
  letter-spacing: 0.5px;
`;

export const DescriptionRestaurantMenu = styled(DescriptionRestaurant)`
  font-size: var(--font-size-xs);
`;

export const Details = styled.div`
  align-items: center;
  display: flex;

  p {
      color: rgb(172, 57, 57);
      font-size: var(--font-size-xxs);
      margin: 0;
      width: 52%;
    }
`;

export const TextCard = styled.div`
  width: 200px;

    h1 {
      font-size: var(--font-size-x);
      font-weight: normal;
      color: #808080;
    }
    
    p {
      font-size: var(--font-size-xxs);
      width: 80%;
      margin: 0;
      color: #808080;
    }
`;

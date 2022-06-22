import styled from 'styled-components';

export const RestaurantContainer = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 14px;
  margin-bottom: 80px;

    .title-and_flag {
      display: flex;
      justify-content: space-evenly;
    }
`;

export const RestaurantImg = styled.img`
  margin-top: -10px;
  height: 137px;
  object-fit: cover;
  width: 100%;
`;

export const CardRestaurant = styled.button`
  border: none;
  background-color: transparent;
  box-shadow: 0px 6px 24px 3px rgba(0, 0, 0, 0.25);
  height: 210px;
  width: 92%;
`;
export const TextContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  color: var(--neutral-color-black-200);    
`;

export const NameRestaurant = styled.p`
  font-size: var(--font-size-m);
`;

export const DescriptionRestaurant = styled.p`
  font-size: var(--font-size-s);
`;

export const FlagImg = styled.img`
  margin-top: -54px;
  border-radius: 50%;
  height: 100px;
  object-fit: cover;
  width: 100px;
`;

export const DetailsRestaurant = styled.div`
  width: 205px;
  height: 20px;
  align-items: center;
  display: flex;
  font-size: var(--font-size-xs);
  margin-top: 2px;
  font-weight: 300;

  svg {
    color: #cc1a39;
    font-size: 15px;
  }
`;

export const Rate = styled.div`
  align-items: center;
  gap: 2px;
  justify-content: center;
  display: flex;
  height: 20px;
  width: 40px;
`;

export const Time = styled.div`
  align-items: center;
  display: flex;
  gap: 2px;
  height: 20px;
  justify-content: center;
  width: 92px;

`;
export const Delivery = styled.div`
  align-items: center;
  display: flex;
  gap: 2px;
  height: 20px;
  justify-content: center;
  width: 75px;

    .delivery {
      font-size: 18px;
    }
`;

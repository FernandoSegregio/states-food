import styled from 'styled-components';

export const RestaurantContainer = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 14px;
  margin-bottom: 80px;

    div {
      display: flex;
      justify-content: space-evenly
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
  width: 60%;
  color: var(--neutral-color-black-200);

  div {
      align-items: center;
      display: flex;
      font-size: var(--font-size-xs);
      justify-content: flex-start;
      margin-top: 2px;
      font-weight: 300;

        span {
          margin-right: 10px;
        }

        svg {
          color: #cc1a39;
          margin-right: 1.5px;
        }

        .delivery {
          font-size: 17px;
        }
    }
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

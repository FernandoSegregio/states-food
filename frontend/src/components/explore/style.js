import styled from 'styled-components';

export const ExploreContainer = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 14px;

    div {
      display: flex;
      justify-content: space-evenly
    }
`;

export const RestaurantImg = styled.img`
  height: 120px;
  object-fit: cover;
  width: 100%;
`;

export const CardRestaurant = styled.section`
  box-shadow: 0px 6px 24px 3px rgba(0, 0, 0, 0.25);
  height: 200px;
  width: 92%;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  color: var(--neutral-color-black-200);

  div {
      align-items: center;
      display: flex;
      font-size: var(--font-size-xs);
      justify-content: flex-start;
      margin-top: 4px;
      font-weight: 300;

        span {
          margin-right: 10px;
        }

        svg {
          color: rgb(172, 57, 57);
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

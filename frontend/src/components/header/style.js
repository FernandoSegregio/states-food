import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  font-size: 14px;
  padding: 20px;
  justify-content: space-between;

    .visible {
        visibility: visible;
    }

    button {
      border: none;
      background-color: transparent;
      visibility: hidden;
      
     

      & > svg {
        font-size: 36px;
        margin-left: -4px;
        color: #808080;
      }
    }


    & > div {
      align-items: flex-end;
      display: flex;
      flex-direction: column;
    }

    

    p {
      color: #808080;

      span {
        text-transform: capitalize;
      }
    }
`;

export const TextHeader = styled.div`
  align-items: center;
  display: flex;  
  flex-direction: row;
  font-size: 13px;
  margin-top: 3px;
  color: #cc1a39;

  svg {
      margin-right: 2px;
    }
`;

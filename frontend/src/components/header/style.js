import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #fff;
  display: flex;
  font-size: 14px;
  height: 80px;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

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

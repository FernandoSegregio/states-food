import styled from 'styled-components';

const FooterContainer = styled.footer`
  align-items: center;
  background-color: var(--brand-color-tertiary);
  bottom: 0;
  display: flex;
  height: 70px;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  z-index: 2;

    svg {
      font-size: 30px;
    }

    button {
      background-color: transparent;
      border: none;
    }
`;

export const SearchBar = styled.input`
  width: 96%;
  position: absolute;
  bottom: 70px;
  height: 50px;
`;

export default FooterContainer;

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  align-items: center;
  background-color: var(--brand-color-tertiary);
  bottom: 0;
  display: flex;
  height: 63px;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  z-index: 2;

    .selected {
      background-color: #cc1a39;

        svg {
          color: #fff;
        }
    }

    svg {
      font-size: 24px;
      color: #4c4c4c;
    }

    button {
      background-color: transparent;
      border: none;
      border-radius: 50%;
      height: 44px;
      width: 44px;

        .iconify--carbon {
          color:#b8b8bf;
        }

        &.search:focus {
          background-color: #c4c4c5;
        }
    }
`;

export const SearchBar = styled.input`
  width: 86%;
  position: absolute;
  bottom: 75px;
  height: 50px;
  border: none;
  border-radius: 8px;
  text-align: center;
  font-size: var(--font-size-s);
  box-shadow: 0px 0px 18px 11px rgb(0 0 0 / 50%);
`;

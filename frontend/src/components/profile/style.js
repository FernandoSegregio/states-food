import styled from 'styled-components';

export const ProfileContainer = styled.div`
  align-items: center;
  background-color: #0000003b;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  justify-content: center;
  width: 100%;
  row-gap: 16px;

    svg {
      font-size: 100px;
      color: #4c4c4c;
    }

    button {
      background-color: #cc1a39;
      border-radius: 8px;
      border: none;
      color: #fff;
      font-size: var(--font-size-s);
      height: 40px;
      width: 60%;
    }

    h1 {
      text-align: center;
      font-size: var(--font-size-m);
      width: 50%;
      color: #4c4c4c;
    }
`;

export const Email = styled.h2`
  font-size: var(--font-size-l);
  color: #292828;
`;

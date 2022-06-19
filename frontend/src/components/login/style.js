import styled from 'styled-components';
import imgLogin from '../../images/background-login.jpeg';

const LoginContainer = styled.div`
  align-items: center;
  background-blend-mode: darken;
  background-color: #00000078;
  background-image: url(${imgLogin});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  width: 100%;

    div {
      padding-left: 30px;
      width: 320px;
    }

    h3 {
      color: #fafafa;
    }

    h1 {
      color: #fafafa;
      font-size: 35px;
      font-weight: 700;
    }

    form {
      align-items: center;
      backdrop-filter: blur(1.6679px);
      background: linear-gradient(180deg, rgba(29, 37, 39, 0.6) 15.42%, rgba(29, 37, 39, 0.552) 35.73%, rgba(29, 37, 39, 0.156) 78.67%, rgba(29, 37, 39, 0) 100%);
      display: flex;
      flex-direction: column;
      height: 280px;
      height: 359px;
      justify-content: center;
      row-gap: 15px;
      width: 80%;
    }

    input {
      font-size: var(--font-size-s);
      height: 50px;
      padding-left: 15px;
      width: 80%;
    }

    button {
      font-size: var(--font-size-s);
      height: 50px;
      width: 80%;
    }
`;

export default LoginContainer;

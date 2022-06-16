import styled from 'styled-components';
import imgLogin from '../../images/background-login.jpeg';

const LoginContainer = styled.div`
  background-image: url(${imgLogin});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

    div {
      width: 320px;
      padding-left: 30px;
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
      margin-top: -60px;
      backdrop-filter: blur(1.6679px);
      background: linear-gradient(180deg, rgba(29, 37, 39, 0.6) 15.42%, rgba(29, 37, 39, 0.552) 35.73%, rgba(29, 37, 39, 0.156) 78.67%, rgba(29, 37, 39, 0) 100%);
      height: 359px;
      align-items: center;
      height: 280px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 15px;
    }

    input {
      width: 80%;
      height: 50px;
      font-size: var(--font-size-s);
      padding-left: 15px;
    }

    button {
      width: 80%;
      height: 50px;
      font-size: var(--font-size-s);
    }
`;

export default LoginContainer;

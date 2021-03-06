import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postItems } from '../../services/axiosRequest';
import { LoginContainer, Message } from './style';

function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  const [statusLogin, setStatusLogin] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function geoLocation() {
    navigator.geolocation.getCurrentPosition((local) => {
      localStorage.setItem('lat', JSON.stringify(local.coords.latitude));
      localStorage.setItem('lng', JSON.stringify(local.coords.longitude));
    });
  }

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const user = await postItems('/login', login);
    localStorage.setItem('user', JSON.stringify(login));
    localStorage.setItem('token', JSON.stringify(user.data));
    geoLocation();
    if (user.data.message) setStatusLogin(user.data.message);
    if (user.status === 200) return navigate('/restaurants');
    return user;
  }

  useEffect(() => {
    const PASS_LENGTH = 6;
    const { email, password } = login;
    const REGEX_EMAIL = /^[\w.]+@[\w.]+\w+\.\w+$/;
    const validateMail = REGEX_EMAIL.test(email);
    const validatePassword = password.length >= PASS_LENGTH;
    setIsDisabled(!(validateMail && validatePassword));
  }, [login]);

  return (
    <LoginContainer>
      <div>
        <h3>Faça seu login, e </h3>
        <h1>conheça os melhores Restaurantes</h1>
      </div>
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          type="text"
          name="email"
          placeholder="email@email.com"
          onChange={handleChange}
          value={login.email}
        />
        <input
          type="password"
          name="password"
          placeholder="senha"
          onChange={handleChange}
          value={login.password}
        />
        <button
          type="submit"
          disabled={isDisabled}
        >
          Entrar
        </button>
      </form>
      <Message>
        {statusLogin && <span className="iconify" data-icon="akar-icons:triangle-alert" />}
        {statusLogin}
      </Message>
    </LoginContainer>
  );
}

export default Login;

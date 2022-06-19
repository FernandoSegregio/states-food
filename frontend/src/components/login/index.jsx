import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postItems } from '../../services/axiosRequest';
import LoginContainer from './style';

function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const user = await postItems('/login', login);
    localStorage.setItem('token', JSON.stringify(user.data));
    if (user.status === 200) return navigate('/explore');
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
        />
        <input
          type="password"
          name="password"
          placeholder="senha"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={isDisabled}
        >
          Entrar
        </button>
      </form>
    </LoginContainer>
  );
}

export default Login;

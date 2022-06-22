import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileContainer, Email } from './style';

function Profile() {
  const [email, setEmail] = useState('');

  function getEmail() {
    const user = JSON.parse(localStorage.getItem('user'));
    setEmail(user.email);
  }

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    localStorage.clear();
    return navigate('/');
  }

  useEffect(() => {
    getEmail();
  }, []);

  return (
    <ProfileContainer>
      <span className="iconify" data-icon="iconoir:profile-circled" />
      <h1>Olá!</h1>
      <Email>{email}</Email>
      <h1>Obrigado por utilizar nosso aplicativo.</h1>
      <button type="button" onClick={(e) => handleLogin(e)}>Sair</button>
    </ProfileContainer>
  );
}

export default Profile;

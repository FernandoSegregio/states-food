import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HeaderContainer, TextHeader } from './style';
import StatesFoodsContext from '../../context/StatesFoodsContext';

function Header() {
  const {
    address, nameUser, setAddress, setFiltered, setNameUser,
  } = useContext(StatesFoodsContext);

  const navigate = useNavigate();

  function getName() {
    const user = JSON.parse(localStorage.getItem('user'));
    setNameUser(user.email.split('@')[0]);
  }

  async function getAdress() {
    const latitude = JSON.parse(localStorage.getItem('lat'));
    const longitude = JSON.parse(localStorage.getItem('lng'));

    const { VITE_YOUR_KEY_GOOGLE } = import.meta.env;
    const { data } = (latitude && longitude) && await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${VITE_YOUR_KEY_GOOGLE}`);

    const street = (data.results[4].formatted_address).split(',')[0];
    setAddress(street);
  }

  useEffect(() => {
    getAdress();
    getName();
  }, []);

  return (
    <HeaderContainer>
      <button
        type="button"
        onClick={() => {
          setFiltered('');
          navigate(-1);
        }}
      >
        <span className="iconify" data-icon="eva:arrow-back-outline" />
      </button>
      <div>
        <p>
          Olá!
          {' '}
          <span>{nameUser}</span>
          , você está neste endereço?
        </p>
        <TextHeader>
          {address && <span className="iconify" data-icon="akar-icons:location" />}
          {address && address}
        </TextHeader>
      </div>
    </HeaderContainer>
  );
}

export default Header;

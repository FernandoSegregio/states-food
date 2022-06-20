import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HeaderContainer, TextHeader } from './style';
import StatesFoodsContext from '../../context/StatesFoodsContext';

function Header() {
  const {
    address, nameUser, setAddress, lat, lng,
  } = useContext(StatesFoodsContext);

  const navigate = useNavigate();

  async function getAdress() {
    const { VITE_YOUR_KEY_GOOGLE } = import.meta.env;
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${VITE_YOUR_KEY_GOOGLE}`);
    const street = (data.results[1].address_components[0].short_name).split(',')[0];
    setAddress(street);
  }

  useEffect(() => {
    getAdress();
  }, []);

  return (
    <HeaderContainer>
      <button type="button" onClick={() => navigate(-1)}>
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

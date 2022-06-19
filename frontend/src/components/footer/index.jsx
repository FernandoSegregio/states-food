import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FooterContainer, SearchBar } from './style';

function Footer() {
  const [isDisable, setIsDisable] = useState(true);
  // const navigate = useNavigate();

  function openSearchBar() {
    return isDisable
      ? setIsDisable(false)
      : setIsDisable(true);
  }

  return (
    <FooterContainer>
      <button type="button">
        <span className="iconify" data-icon="charm:home" />
      </button>
      <button type="button">
        <span className="iconify" data-icon="carbon:ticket" />
      </button>
      <button type="button" onClick={() => openSearchBar()}>
        <span className="iconify" data-icon="bi:search" />
      </button>
      <button type="button">
        <span className="iconify" data-icon="iconoir:profile-circled" />
      </button>
      <SearchBar type="text" hidden={isDisable} placeholder="Pesquise por um Restaurante ou Prato" />
    </FooterContainer>
  );
}

export default Footer;

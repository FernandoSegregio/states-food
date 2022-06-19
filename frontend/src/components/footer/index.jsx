import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterContainer, { SearchBar } from './style';

function Footer() {
  const [openSearch, setopenSearch] = useState(true);
  const navigate = useNavigate();

  function openSearchBar() {
    return openSearch
      ? setopenSearch(false)
      : setopenSearch(true);
  }

  return (
    <FooterContainer>
      <button type="button" onClick={navigate('/explore')}>
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
      <input type="text" disabled={openSearch} placeholder="teste" />
    </FooterContainer>
  );
}

export default Footer;

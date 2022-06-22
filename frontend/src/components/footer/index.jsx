import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import StatesFoodsContext from '../../context/StatesFoodsContext';
// import { useNavigate } from 'react-router-dom';
import { FooterContainer, SearchBar } from './style';

function Footer() {
  const [isDisable, setIsDisable] = useState(true);

  // const navigate = useNavigate();
  const { setFiltered } = useContext(StatesFoodsContext);

  const location = useLocation();

  function openSearchBar() {
    console.log(location);
    return isDisable
      ? setIsDisable(false)
      : setIsDisable(true);
  }

  return (
    <FooterContainer>
      <Link to="/restaurants">
        <button
          type="button"
          className={location.pathname === '/restaurants' && 'selected'}
          onClick={() => setIsDisable(true)}
        >
          <span className="iconify" data-icon="charm:home" />
        </button>
      </Link>
      <button type="button">
        <span className="iconify" data-icon="carbon:ticket" />
      </button>
      <button type="button" onClick={() => openSearchBar()}>
        <span className="iconify" data-icon="bi:search" />
      </button>
      <button type="button">
        <span className="iconify" data-icon="iconoir:profile-circled" />
      </button>
      <SearchBar
        type="text"
        hidden={isDisable}
        placeholder="Pesquise por um Restaurante ou Prato"
        onChange={(e) => setFiltered(e.target.value)}
      />
    </FooterContainer>
  );
}

export default Footer;

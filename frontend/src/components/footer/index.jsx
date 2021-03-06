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
    if (location.pathname === '/restaurants') {
      if (isDisable) {
        setIsDisable(false);
      } else {
        setFiltered('');
        setIsDisable(true);
      }
    }
    return null;
  }

  return (
    <FooterContainer>
      <Link to="/restaurants">
        <button
          type="button"
          className={location.pathname === '/restaurants' && 'selected'}
          onClick={() => {
            setFiltered('');
            setIsDisable(true);
          }}
        >
          <span className="iconify" data-icon="charm:home" />
        </button>
      </Link>
      <button type="button">
        <span className="iconify" data-icon="carbon:ticket" />
      </button>
      <button
        className={location.pathname === '/restaurants' ? 'search' : 'search-disable'}
        type="button"
        onClick={() => openSearchBar()}
      >
        <span className="iconify" data-icon="bi:search" />
      </button>
      <Link to="/profile">
        <button
          className={location.pathname === '/profile' && 'selected'}
          type="button"
          onClick={() => {
            setIsDisable(true);
            setFiltered('');
          }}
        >
          <span className="iconify" data-icon="iconoir:profile-circled" />
        </button>
      </Link>
      <SearchBar
        type="text"
        hidden={isDisable}
        placeholder="Pesquise por um Restaurante ou Prato"
        onChange={(e) => {
          setFiltered(e.target.value);
        }}

      />
    </FooterContainer>
  );
}

export default Footer;

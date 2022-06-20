import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import StatesFoodsContext from './StatesFoodsContext';

function StatesFoodsProvider({ children }) {
  const [address, setAddress] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [filtered, setFiltered] = useState('');

  
  const context = useMemo(() => ({
    address,
    nameUser,
    lat,
    lng,
    filtered,
    setAddress,
    setNameUser,
    setLat,
    setLng,
    setFiltered,
  }), [address, nameUser, lat, lng, filtered,]);

  return (
    <StatesFoodsContext.Provider value={context}>
      {children}
    </StatesFoodsContext.Provider>
  );
}
StatesFoodsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StatesFoodsProvider;

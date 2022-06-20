import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import StatesFoodsContext from './StatesFoodsContext';

function StatesFoodsProvider({ children }) {
  const [address, setAddress] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const context = useMemo(() => ({
    address,
    setAddress,
    nameUser,
    setNameUser,
    lat,
    setLat,
    lng,
    setLng,
  }), [address, nameUser, lat, lng]);

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

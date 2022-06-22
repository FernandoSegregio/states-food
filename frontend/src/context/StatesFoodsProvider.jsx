import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import StatesFoodsContext from './StatesFoodsContext';

function StatesFoodsProvider({ children }) {
  const [address, setAddress] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [filtered, setFiltered] = useState('');

  const context = useMemo(() => ({
    address,
    nameUser,
    filtered,
    setAddress,
    setNameUser,
    setFiltered,
  }), [address, nameUser, filtered]);

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

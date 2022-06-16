import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/login';
import Explore from './components/explore';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;

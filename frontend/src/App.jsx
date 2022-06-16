import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/login';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        {' '}
        {/* <Route path="/table" element={<Search />} /> */}
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;

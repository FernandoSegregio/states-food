import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/login';
import RestaurantsPage from './pages/RestaurantsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
    </Routes>
  );
}

export default App;

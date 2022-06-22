import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import RestaurantsPage from './pages/RestaurantsPage';
import MealsPage from './pages/MealsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/restaurants/:id" element={<MealsPage />} />
    </Routes>
  );
}

export default App;

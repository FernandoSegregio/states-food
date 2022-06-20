import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/login';
import RestaurantsPage from './pages/RestaurantsPage';
import MealsPage from './pages/MealsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/restaurants/:id" element={<MealsPage />} />
    </Routes>
  );
}

export default App;

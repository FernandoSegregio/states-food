import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/login';
import ExplorePage from './pages/ExplorePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/explore" element={<ExplorePage />} />
    </Routes>
  );
}

export default App;

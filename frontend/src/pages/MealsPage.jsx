import React from 'react';
import MenuMeals from '../components/meals';
import Footer from '../components/footer';
import Header from '../components/header';

function MealsPage() {
  return (
    <>
      <Header />
      <MenuMeals />
      <Footer />
    </>
  );
}

export default MealsPage;

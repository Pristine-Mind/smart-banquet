import React from 'react';
import Navbar from '../components/Navbar';
import RestaurantSection from '../components/RestaurantSection';
import Footer from '../components/Footer';

const Restaurant: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <RestaurantSection />
      <Footer />
    </div>
  );
};

export default Restaurant;

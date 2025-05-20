import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import EventSpaceSection from '../components/EventSpaceSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navbar />
      <HomeSection />
      <EventSpaceSection/>
      <Footer/>
    </div>
  );
};

export default Home;

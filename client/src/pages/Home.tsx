import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import EventSpaceSection from '../components/EventSpaceSection';
import Footer from '../components/Footer';
import AutoPlayVideo from '../components/HomeVIdeo';

import introVideo from '../assets/intro.mp4';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <HomeSection />
      <EventSpaceSection/>
      <AutoPlayVideo
        src={introVideo}
        poster="/images/hero-poster.jpg"
        loop
        muted
        className="rounded-lg shadow-lg"
      />
      <Footer/>
    </div>
  );
};

export default Home;

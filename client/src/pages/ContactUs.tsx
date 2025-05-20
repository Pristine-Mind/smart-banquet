import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUsSection from '../components/ContactUsSection';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default About;

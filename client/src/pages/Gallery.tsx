import React from 'react';
import Navbar from '../components/Navbar';
import GallerySection from '../components/GallerySection.tsx';
import Footer from '../components/Footer';

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Gallery;

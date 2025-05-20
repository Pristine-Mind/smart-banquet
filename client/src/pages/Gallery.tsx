import React from 'react';
import Navbar from '../components/Navbar';

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="container mx-auto py-6 flex-grow">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Gallery of Smart Garden
        </h1>
      </main>
    </div>
  );
};

export default Gallery;

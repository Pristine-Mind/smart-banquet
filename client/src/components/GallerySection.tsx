import React, { useState } from 'react';
import { motion } from 'framer-motion';
import hall from '../assets/hall.jpg';
import hall2 from '../assets/hall2.jpg';
import restaurant from '../assets/restaurant.jpg';
import restaurant2 from '../assets/restaurant2.jpg';
import indoor from '../assets/indoor.jpg';
import outdoor from '../assets/outdoor.jpg';
import garden from '../assets/garden.jpg';
import outdoor2 from '../assets/outdoor2.jpg';
import outdoor3 from '../assets/outdoor3.jpeg';
import outdoor4 from '../assets/outdoor4.jpeg'
import outdoor5 from '../assets/outdoor5.jpeg'
import outdoor6 from '../assets/outdoor6.jpeg'
import outdoor7 from '../assets/outdoor7.jpeg'
import outdoor8 from '../assets/outdoor8.jpeg'
import outdoor9 from '../assets/outdoor9.jpeg'
import outdoor10 from '../assets/outdoor10.jpeg'

const galleryItems = [
  { id: 1, src: hall, title: 'Grand Event Hall', category: 'Events' },
  { id: 2, src: restaurant, title: 'Dining Elegance', category: 'Dining' },
  { id: 3, src: outdoor, title: 'Garden Venue', category: 'Outdoors' },
  { id: 4, src: hall2, title: 'Wedding Setup', category: 'Events' },
  { id: 5, src: restaurant2, title: 'Gourmet Experience', category: 'Dining' },
  { id: 6, src: indoor, title: 'Indoor Celebration', category: 'Events' },
  {id: 7, src: outdoor2, title: 'Outdoor Celebration', category: 'Outdoors'},
  {id: 8, src: garden, title: 'Garden Venue', category: 'Outdoors'},
  {id: 9, src: outdoor3, title: 'Garden Venue', category: 'Outdoors'},
  {id: 10, src: outdoor4, title: 'Garden Venue', category: 'Outdoors'},
  {id: 11, src: outdoor5, title: 'Garden Venue', category: 'Outdoors'},
  {id: 12, src: outdoor6, title: 'Garden Venue', category: 'Outdoors'},
  {id: 13, src: outdoor7, title: 'Garden Venue', category: 'Outdoors'},
  {id: 14, src: outdoor8, title: 'Garden Venue', category: 'Outdoors'},
  {id: 14, src: outdoor9, title: 'Garden Venue', category: 'Outdoors'},
  {id: 15, src: outdoor10, title: 'Garden Venue', category: 'Outdoors'},
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
};

const overlayVariants = {
  rest: { opacity: 0, scale: 0.9 },
  hover: { opacity: 0.9, scale: 1, transition: { duration: 0.3 } },
};

interface GallerySectionProps {}

const GallerySection: React.FC<GallerySectionProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <motion.section
      className="relative py-16 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-black mb-12 relative"
        >
          Gallery
          <motion.div
            className="absolute bottom-0 left-1/2 w-0 h-1"
            initial={{ width: 0 }}
            animate={{ width: '20%' }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          />
        </motion.h2>

        <div className="flex justify-center gap-4 mb-8">
          {['All', 'Events', 'Dining', 'Outdoors'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-white font-medium rounded-full transition-colors duration-300 ${
                selectedCategory === category ? 'bg-green-900' : 'bg-gray-800 hover:bg-[#00D4FF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="mb-6 break-inside-avoid relative"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto rounded-lg object-cover shadow-lg"
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-lg"
                variants={overlayVariants}
                initial="rest"
                whileHover="hover"
              >
                <div className="text-center">
                  <h3 className="text-xl text-black font-extrabold">{item.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GallerySection;

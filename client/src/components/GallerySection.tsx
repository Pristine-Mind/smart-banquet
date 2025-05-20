import React, { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { id: 1, src: 'https://plus.unsplash.com/premium_photo-1664391631217-d53431f0effd?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Grand Event Hall', category: 'Events' },
  { id: 2, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Dining Elegance', category: 'Dining' },
  { id: 3, src: 'https://images.unsplash.com/photo-1642704578943-a3aac11885a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhcmRlbiUyMHZlbnVlfGVufDB8fDB8fHww', title: 'Garden Venue', category: 'Outdoors' },
  { id: 4, src: 'https://images.unsplash.com/photo-1648226507967-d26f3257b571?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGluZ3xlbnwwfHwwfHx8MA%3D%3D', title: 'Wedding Setup', category: 'Events' },
  { id: 5, src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Gourmet Dish', category: 'Dining' },
  { id: 6, src: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Outdoor Party', category: 'Outdoors' },
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

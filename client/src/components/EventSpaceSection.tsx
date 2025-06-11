import React from 'react';
import { motion } from 'framer-motion';
import hall2 from '../assets/hall2.jpg'
import restaurant from '../assets/restaurant3.jpeg'
import garden from '../assets/garden.jpg'
import indoor from '../assets/indoor.jpg'

const spaces = [
  {
    name: 'Grand Banquet Hall',
    image: hall2,
    description: 'Our Grand Banquet Hall is perfect for weddings and large celebrations, accommodating up to 1000 guests with elegant decor.',
  },
  {
    name: 'Private Dining Room',
    image: restaurant,
    description: 'Enjoy an intimate dining experience in our Private Dining Room, ideal for family gatherings or corporate dinners.',
  },
  {
    name: 'Outdoor Party Terrace',
    image: garden,
    description: 'Host your next event on our Outdoor Party Terrace, offering a vibrant setting for up to 1000 guests with stunning views.',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: '#D4AF37' },
  hover: {
    scale: 1.1,
    backgroundColor: '#B8972F',
    transition: { duration: 0.3 },
  },
};

interface EventSpacesSectionProps {}

const EventSpacesSection: React.FC<EventSpacesSectionProps> = () => {
  return (
    <motion.section
      className="py-12 bg-white"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Event Spaces & Dining Areas
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={cardContainerVariants}
        >
          {spaces.map((space) => (
            <motion.div
              key={space.name}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <img
                src={space.image}
                alt={space.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {space.name}
                </h3>
                <p className="text-gray-600 mb-4">{space.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EventSpacesSection;

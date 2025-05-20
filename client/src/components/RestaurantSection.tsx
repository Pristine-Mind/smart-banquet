import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
  },
};

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3 } },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: '#62452a' },
  hover: { scale: 1.05, backgroundColor: '#B8972F', transition: { duration: 0.3 } },
};

interface RestaurantSectionProps {}

const RestaurantSection: React.FC<RestaurantSectionProps> = () => {
  return (
    <motion.section
      className="relative py-12 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background Overlay with Wood Texture */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154347-6e9e6e0e8f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Restaurant Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 relative"
          variants={textVariants}
        >
          Dining Experience
          <motion.div
            className="absolute bottom-0 left-1/2 w-0 h-1 bg-[#D4AF37]"
            initial={{ width: 0 }}
            animate={{ width: '20%' }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          />
        </motion.h2>

        {/* Introduction */}
        <motion.p
          className="text-center text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
          variants={textVariants}
        >
          Savor the finest culinary delights at Smart Banquet and Resort. Our restaurant offers an exquisite ambiance, blending local Nepali flavors with international cuisine, crafted by expert chefs to elevate your dining experience.
        </motion.p>

        {/* Menu Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="relative p-6 bg-[url('https://images.unsplash.com/photo-1600585154347-6e9e6e0e8f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-md border border-gray-200"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
            <div className="relative z-10">
              <motion.div className="mb-4 overflow-hidden rounded-lg">
                <motion.img
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Continental Cuisine - Creamy Pasta"
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                  initial="rest"
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Continental Cuisine</h3>
              <p className="text-gray-700">
                Indulge in classic dishes like creamy pastas, grilled steaks, and delicate desserts.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative p-6 bg-[url('https://images.unsplash.com/photo-1600585154347-6e9e6e0e8f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-md border border-gray-200"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
            <div className="relative z-10">
              <motion.div className="mb-4 overflow-hidden rounded-lg">
                <motion.img
                  src="https://images.unsplash.com/photo-1625944525431-2d2f6924d347?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Nepali Specialties - Momos"
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                  initial="rest"
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Nepali Specialties</h3>
              <p className="text-gray-700">
                Enjoy authentic dal bhat, momos, and spicy curries with a modern twist.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative p-6 bg-[url('https://images.unsplash.com/photo-1600585154347-6e9e6e0e8f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-md border border-gray-200"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
            <div className="relative z-10">
              <motion.div className="mb-4 overflow-hidden rounded-lg">
                <motion.img
                  src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Gourmet Selections - Signature Dish"
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                  initial="rest"
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gourmet Selections</h3>
              <p className="text-gray-700">
                Experience signature dishes with seasonal ingredients and innovative presentations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Reservation Options */}
        <motion.div className="text-center mt-12" variants={textVariants}>
          <p className="text-gray-700 mb-4">
            Reserve your table today for a memorable dining experience. Call us at +977 9855075835 or book online.
          </p>
          <Link to="/reservation">
            <motion.button
              className="px-6 py-3 text-white font-medium rounded-lg"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
            >
              Reserve Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RestaurantSection;

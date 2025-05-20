import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const buttonVariants = {
  rest: { scale: 1, backgroundColor: '#D4AF37' },
  hover: { scale: 1.05, backgroundColor: '#B8972F', transition: { duration: 0.3 } },
};

interface ServicesSectionProps {}

const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <motion.section
      className="relative py-12 bg-gradient-to-b from-gray-100 to-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bbae11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 relative"
          variants={textVariants}
        >
          Our Services
          <motion.div
            className="absolute bottom-0 left-1/2 w-0 h-1"
            initial={{ width: 0 }}
            animate={{ width: '20%' }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          />
        </motion.h2>

        <motion.p
          className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          variants={textVariants}
        >
          Discover the full spectrum of exceptional services at Smart Banquet and Resort. From flawless event planning to luxurious accommodations and gourmet dining, we are dedicated to making every moment unforgettable.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Event Hosting</h3>
            <p className="text-gray-600 mb-4">
              We specialize in creating bespoke events, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>💒 Weddings & Receptions (Indoor/Outdoor)</li>
              <li>💼 Corporate Events (Conferences, Seminars, Galas)</li>
              <li>🎉 Social Gatherings (Birthdays, Anniversaries, Reunions)</li>
              <li>🏬 Exhibitions & Trade Shows</li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Catering Services</h3>
            <p className="text-gray-600 mb-4">
              Indulge in gourmet cuisine with our customizable menus, crafted by expert chefs to suit any occasion.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>🍽️ Tailored dining experiences</li>
              <li>🍷 Premium beverage options</li>
              <li>🥗 Dietary accommodations</li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Accommodations</h3>
            <p className="text-gray-600 mb-4">
              Relax in our luxurious rooms and resort facilities, designed for comfort and elegance.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>🛏️ Spacious, modern suites</li>
              <li>🌿 Scenic garden views</li>
              <li>🏊‍♂️ Access to resort amenities</li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Additional Amenities</h3>
            <p className="text-gray-600 mb-4">
              Enhance your experience with our state-of-the-art support and facilities.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>🎤 State-of-the-art AV & tech support</li>
              <li>🌳 Scenic outdoor venues</li>
              <li>🅿️ Ample parking & valet services</li>
            </ul>
          </motion.div>
        </div>

        <motion.div className="text-center mt-12" variants={textVariants}>
          <Link to="/booking">
            <motion.button
              className="px-6 py-3 text-white font-medium rounded-lg bg-[#62452a]"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
            >
              Book Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AutoPlayVideo from './AutoPlayVideo';

// Import video assets
import hall from '../assets/party.mp4';
import hall2 from '../assets/party2.mp4';
import hall3 from '../assets/party3.mp4';
import hall4 from '../assets/party4.mp4';
import hall5 from '../assets/party5.mp4';
import hall6 from '../assets/party6.mp4';
import hall7 from '../assets/party7.mp4';
import hall8 from '../assets/party8.mp4';
import outdoor3 from '../assets/outdoor3.mp4';

// Import image assets
import outdoor from '../assets/outdoor.jpg';
import indoor from '../assets/indoor.jpg';
import restaurant3 from '../assets/restaurant3.jpeg';
import restaurant4 from '../assets/restaurant4.jpeg';
import outdoor4 from '../assets/outdoor4.jpeg';
import outdoor5 from '../assets/outdoor5.jpeg';
import outdoor6 from '../assets/outdoor6.jpeg';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardVariants = {
  rest: { scale: 1, opacity: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } },
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: '#D4AF37' },
  hover: { scale: 1.05, backgroundColor: '#B8972F', transition: { duration: 0.3 } },
};

const ServicesSection = () => {
  // Define video data
  const videos = [
    { src: hall, ariaLabel: 'Virtual tour of banquet hall' },
    { src: hall2, ariaLabel: 'Virtual tour of resort event space' },
    { src: outdoor3, ariaLabel: 'Virtual tour of outdoor event space' },
    { src: hall3, ariaLabel: 'Virtual tour of resort event space' },
    { src: hall4, ariaLabel: 'Virtual tour of resort event space' },
    { src: hall5, ariaLabel: 'Virtual tour of resort event space' },
    { src: hall6, ariaLabel: 'Virtual tour of resort event space' },
    { src: hall7, ariaLabel: 'Virtual tour of resort event space' },
    { src: hall8, ariaLabel: 'Virtual tour of resort event space' },
  ];

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
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#D4AF37]"
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

        {/* Auto-scrolling Image Section */}
        <div className="mb-12 overflow-hidden w-full">
          <div className="flex animate-scroll gap-4">
            {[
              outdoor,
              indoor,
              restaurant3,
              restaurant4,
              outdoor4,
              outdoor5,
              outdoor6,
            ].map((img, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px] h-[200px] rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={img}
                  alt={`Service showcase ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <motion.div
          className="mb-12 flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-4xl font-bold text-black text-center drop-shadow-lg mb-6"
            variants={textVariants}
          >
            Virtual Tours
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                className="w-full h-[300px] overflow-hidden rounded-xl shadow-xl"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <AutoPlayVideo
                  src={video.src}
                  title=""
                  loop={true}
                  muted={true}
                  controls={false}
                  className="h-full w-full object-cover"
                  aria-label={video.ariaLabel}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Cards */}
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

        {/* Book Now Button */}
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
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import indoor from '../assets/indoor.jpg'
import party1 from '../assets/party1.mp4'
import hall from '../assets/hall.mp4';

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

const buttonVariants = {
  rest: { scale: 1, backgroundColor: '#D4AF37' },
  hover: { scale: 1.05, backgroundColor: '#B8972F', transition: { duration: 0.3 } },
};

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3 } },
};

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <motion.section
      className="relative py-12 bg-gradient-to-b from-gray-100 to-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        // style={{
        //   backgroundImage: `url(${indoor})`,
        // }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* About Us Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 relative"
          variants={textVariants}
        >
          About Us
          <motion.div
            className="absolute bottom-0 left-1/2 w-0 h-2"
            initial={{ width: 0 }}
            animate={{ width: '40%' }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div className="space-y-6" variants={textVariants}>
            <motion.h3
              className="text-2xl font-semibold text-gray-800 bg-gradient-to-r from-[#D4AF37]/70 to-transparent bg-clip-text"
            >
              A Premier Destination for Events & Getaways
            </motion.h3>
            <motion.p className="text-lg text-gray-600 leading-relaxed">
              At Smart Banquet and Resort, we pride ourselves on crafting extraordinary experiences. Our sprawling banquet halls, meticulously designed gardens, and world-class resort amenities cater to weddings, conferences, social gatherings, and luxurious getaways.
            </motion.p>
            <motion.div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us?</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>✔ Stunning, customizable event spaces</li>
                <li>✔ Expert event planning & catering services</li>
                <li>✔ Luxurious accommodations for guests</li>
                <li>✔ State-of-the-art AV & tech support</li>
                <li>✔ Scenic outdoor venues for photography</li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div variants={textVariants}>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={indoor}
                alt="Smart Banquet and Resort Event"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-12" variants={textVariants}>
          <motion.h3
            className="text-3xl font-bold text-center text-gray-800 relative hover:text-[#D4AF37] transition-colors duration-300"
          >
            Host Unforgettable Events in Style
          </motion.h3>
          <motion.p className="text-center text-gray-600 mt-4 mb-8 max-w-2xl mx-auto">
            From intimate celebrations to grand spectacles, our versatile venues and expert team deliver flawless experiences.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
              variants={cardVariants}
              whileHover="hover"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2">We Specialize In:</h4>
              <ul className="space-y-2 text-gray-600">
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
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Amenities Included:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>✨ Elegant décor & lighting</li>
                <li>🍽️ Customizable catering menus</li>
                <li>🎤 Stage, sound, & projector setups</li>
                <li>🅿️ Ample parking & valet services</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Take a Virtual Tour
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Video 1 */}
            <div className="w-full aspect-video overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <video
                src={hall}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label="Virtual tour of banquet hall"
              />
            </div>
            {/* Video 2 */}
            <div className="w-full aspect-video overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <video
                src={party1}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label="Virtual tour of resort event space"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.section>
    
  );
};

export default AboutSection;

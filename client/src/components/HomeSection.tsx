import React from 'react';
import { motion } from 'framer-motion';

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
    transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
  },
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: '#62452A' },
  hover: {
    scale: 1.1,
    backgroundColor: '#62452A',
    transition: { duration: 0.3 },
  },
};

interface HomeSectionProps {}

const HomeSection: React.FC<HomeSectionProps> = () => {
  return (
    <motion.section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/493274449_1241984784598669_7906087421451050034_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=FxViLkbNptUQ7kNvwF5igrt&_nc_oc=Adl2066lsYMlWdWYme-0mKyEGVjtaO5oIxIJ999yjiSognHEDc3jh7i0Z5fpFH4DeNID4wj1mbfWngvz1jxNoX9c&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=0Lw1TzK7wFc1U7C7n04AGQ&oh=00_AfITH4nQRtRIM8HTGg4Nm9mzpCxXNQE6HH0fxXeKAW629Q&oe=68311206')`,
      }}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <motion.h1
          className="text-5xl font-bold text-white mb-4"
          variants={textVariants}
        >
          Welcome to Smart Banquet
        </motion.h1>
        <motion.p
          className="text-lg text-white max-w-2xl mx-auto mb-6"
          variants={textVariants}
        >
          Experience luxury and comfort at Smart Banquet, nestled in the heart of Chitwan, Nepal. 
          Enjoy world-class amenities, exquisite dining, and a serene environment perfect for your next getaway.
        </motion.p>
        <motion.button
          className="px-6 py-3 text-black font-semibold rounded-lg"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
        >
          Book Now
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HomeSection;

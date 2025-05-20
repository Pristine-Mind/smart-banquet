import React from 'react';
import { motion } from 'framer-motion';

const LogoVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.2, transition: { duration: 0.3 } },
};

const Logo: React.FC = () => {
  return (
    <motion.div
      className="flex items-center space-x-2"
      whileHover="hover"
      variants={LogoVariants}
    >
      <svg
        className="w-10 h-10 text-red-600"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7v10h5v5l7-5h3l5-5V7l-10-5zm0 2l8 4.5v7l-4 2.5h-4l-4-2.5v-7L12 4zm-2 9v4h4v-4h-4zm2-6a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
      <span className="text-xl font-bold text-gray-800">CMT Hotel</span>
    </motion.div>
  );
};

export default Logo;

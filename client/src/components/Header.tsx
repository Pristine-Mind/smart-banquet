import React from 'react';
import { HomeIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

interface HeaderProps {}

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const iconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.2, transition: { duration: 0.3 } },
};

const textVariants = {
  hidden: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? -50 : 50,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
  },
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <motion.header
      className="bg-[#92a85f] text-black py-4 px-4 sm:px-6 md:px-6 lg:px-8 flex flex-col md:flex-row justify-around items-center font-medium"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex items-center space-x-2 mb-2 md:mb-0"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom="left"
      >
        <motion.div whileHover="hover" variants={iconVariants}>
          <HomeIcon className="w-5 h-5" />
        </motion.div>
        <span className="text-xs sm:text-sm md:text-sm lg:text-base">
          Bharatpur-12, Basanta-Chowk, Chitwan, Nepal
        </span>
      </motion.div>
      <motion.div
        className="flex items-center space-x-2"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom="right"
      >
        <motion.div whileHover="hover" variants={iconVariants}>
          <EnvelopeClosedIcon className="w-5 h-5" />
        </motion.div>
        <span className="text-xs sm:text-sm md:text-sm lg:text-base">+056-420264 / 9761080860</span>
      </motion.div>
    </motion.header>
  );
};

export default Header;
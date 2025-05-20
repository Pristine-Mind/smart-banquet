import React from 'react';
import { HomeIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const linkVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, color: '#D4AF37', transition: { duration: 0.3 } },
};

const logoVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.2, transition: { duration: 0.3 } },
};

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <motion.nav
      className="bg-white shadow-md py-4 px-6 flex justify-between items-center"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex items-center space-x-2 ml-64"
        whileHover="hover"
        variants={logoVariants}
      >
        <Link to="/">
          <div className="flex items-center space-x-2">
            <HomeIcon className="w-6 h-6 text-red-600" />
            <span className="text-xl font-bold text-gray-800">SMART GARDEN</span>
          </div>
        </Link>
      </motion.div>

      <ul className="flex space-x-10 mr-64">
        {['Home', 'About', 'Services', 'Restaurant', 'Gallery', 'Contact Us'].map((item) => (
          <motion.li
            key={item}
            className="text-gray-600 hover:text-gray-900 cursor-pointer font-bold"
            whileHover="hover"
            variants={linkVariants}
          >
            <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
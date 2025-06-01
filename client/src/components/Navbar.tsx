import React, { useState } from 'react';
import { HomeIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpeg";

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

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navItems = ['Home', 'About', 'Services', 'Restaurant', 'Gallery', 'Contact Us'];

  return (
    <motion.nav
      className="bg-white shadow-md py-4 px-4 sm:px-6 md:px-6 lg:px-8 flex justify-between items-center relative z-40"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex items-center space-x-2"
        whileHover="hover"
        variants={logoVariants}
      >
        <Link to="/">
          <div className="flex items-center space-x-2">
            {/* <HomeIcon className="w-6 h-6 text-red-600" /> */}
            <img
              src={logo}
              alt="Smart Garden"
              className="h-20 w-auto object-contain"
            />
          </div>
        </Link>
      </motion.div>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-600 transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-600 my-1 transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-600 transform transition-transform duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      <ul className="hidden md:flex md:space-x-4 lg:space-x-8">
        {navItems.map((item) => (
          <motion.li
            key={item}
            className="text-gray-600 hover:text-gray-900 cursor-pointer font-bold text-sm md:text-sm lg:text-base"
            whileHover="hover"
            variants={linkVariants}
          >
            <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="fixed top-16 left-0 w-full bg-white bg-opacity-95 shadow-md md:hidden overflow-hidden z-50"
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isMobileMenuOpen ? 'visible' : 'hidden'}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          {navItems.map((item) => (
            <motion.li
              key={item}
              className="text-gray-600 hover:text-gray-900 cursor-pointer font-bold text-lg"
              whileHover="hover"
              variants={linkVariants}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

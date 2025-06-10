import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import logo from "../assets/logo.png";


const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const linkVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, color: '#D4AF37', transition: { duration: 0.3 } },
};

const iconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.2, color: '#D4AF37', transition: { duration: 0.3 } },
};

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <motion.footer
      className="bg-[#92a85f] text-black py-12"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={logo}
              alt="Smart Banquet and Resort Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

            <p className="text-black">Celebrate & Dine in Style</p>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://www.instagram.com/smart_garden_restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <FaInstagram className="w-6 h-6 textblack" />
              </motion.a>
              <motion.a
                href="hhttps://www.facebook.com/smartbanquetandresort"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <FaFacebook className="w-6 h-6 text-black" />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@smart_garden_restaurant"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <FaTiktok className="w-6 h-6 text-black" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-black mb-4 ">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <HomeIcon className="w-5 h-5 text-[#D4AF37]" />
                <span className='font-semibold'>Bharatpur-12, Basanta-Chowk, Chitwan, Nepal</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="w-5 h-5 text-[#D4AF37]" />
                <span className='font-semibold'>+977 9855010590 / 056-420264</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeOpenIcon className="w-5 h-5 text-[#D4AF37]" />
                <span className='font-semibold'>business.smartgarden.bharatpur@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-black mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Restaurant', 'Gallery', 'Contact Us'].map((link) => (
                <motion.li
                  key={link}
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-black hover:text-[#D4AF37] font-semibold">
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-black">
          <p>© 2025 Smart Garden and Restaurant. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
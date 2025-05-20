import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, EnvelopeOpenIcon, EnvelopeClosedIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

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
          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <HomeIcon className="w-8 h-8 text-[#D4AF37]" />
              <h3 className="text-2xl font-bold">CMT Party Palace</h3>
            </div>
            <p className="text-black-300">Celebrate & Dine in Style</p>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <InstagramLogoIcon className="w-6 h-6 text-black" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <InstagramLogoIcon className="w-6 h-6 text-black" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <TwitterLogoIcon className="w-6 h-6 text-black" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-balck mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <HomeIcon className="w-5 h-5 text-[#D4AF37]" />
                <span>Bharatpur-12, Basanta-Chowk, Chitwan, Nepal</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeOpenIcon className="w-5 h-5 text-[#D4AF37]" />
                <span>+977 9855010590</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeClosedIcon className="w-5 h-5 text-[#D4AF37]" />
                <span>info@smartbanquet.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Event Spaces', 'Dining', 'Catering', 'Gallery', 'Contact Us'].map((link) => (
                <motion.li
                  key={link}
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-black hover:text-[#D4AF37]">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-black">
          <p>© 2025 Smart Garden Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

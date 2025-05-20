import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants
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

interface ContactUsSectionProps {}

const ContactUsSection: React.FC<ContactUsSectionProps> = () => {
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
          Contact Us
          <motion.div
            className="absolute bottom-0 left-1/2 w-0 h-1 bg-[#D4AF37]"
            initial={{ width: 0 }}
            animate={{ width: '20%' }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="space-y-6" variants={textVariants}>
            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-gray-600">
              We’d love to hear from you! Reach out for inquiries, bookings, or assistance.
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📞</span> +977 9855075835
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📧</span> info@smartbanquet.com
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📍</span> Bharatpur-9, Hakim-Chowk, Chitwan, Nepal
              </p>
            </div>
          </motion.div>

          <motion.div variants={textVariants}>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-2 text-white font-medium rounded-lg"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div className="mt-12" variants={textVariants}>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Our Location</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.979843295792!2d84.4213492151221!3d27.668363482767258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e58b8e5b2f4d%3A0x7e5a8c2b1f3b9c!2sBharatpur%2C%20Chitwan%2C%20Nepal!5e0!3m2!1sen!2sus!4v1716164100000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smart Banquet and Resort Location"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUsSection;

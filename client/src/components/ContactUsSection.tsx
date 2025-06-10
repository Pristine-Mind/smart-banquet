import React, { useState } from 'react';
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
    transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
  },
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: '#D4AF37' },
  hover: { scale: 1.05, backgroundColor: '#B8972F', transition: { duration: 0.3 } },
};

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface ContactUsSectionProps {}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUsSection: React.FC<ContactUsSectionProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }

    try {
      const response = await fetch('http://localhost:9001/api/contact/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setStatus(null);
        }, 3000);
      } else {
        setStatus({ type: 'error', message: result.message || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    }
  };

  return (
    <motion.section
      className="relative py-12 bg-gradient-to-b from-gray-100 to-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 relative"
          variants={textVariants}
        >
          Contact Us
          <motion.div
            className="absolute bottom-0 left-1/2 w-0 h-1"
            initial={{ width: 0 }}
            animate={{ width: '20%' }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          />
        </motion.h2>

        {status.type && (
          <motion.div
            className={`p-4 mb-6 text-center rounded-lg ${
              status.type === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
            }`}
            variants={messageVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {status.message}
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="space-y-6" variants={textVariants}>
            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-gray-600">
              We'd love to hear from you! Reach out for inquiries, bookings, or assistance.
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📞</span> +977 9855010590
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📧</span> business.smartgarden.bharatpur@gmail.com
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📍</span> Bharatpur-12, BasnataChowk, Chitwan, Nepal
              </p>
            </div>
          </motion.div>

          <motion.div variants={textVariants}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6764009906587!2d84.4507046!3d27.6654819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e5b3543478ed%3A0x1bd64023dbe662bf!2sSmart%20Banquet%20%26%20Resort!5e0!3m2!1sen!2snp!4v1747786678879!5m2!1sen!2snp"
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

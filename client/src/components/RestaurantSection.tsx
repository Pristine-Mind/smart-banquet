import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import restaurant from '../assets/restaurant.jpg';
import restaurant2 from '../assets/restaurant2.jpg';
import restaurnt3 from '../assets/restaurant3.jpeg'
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

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3 } },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: '#62452a' },
  hover: { scale: 1.05, backgroundColor: '#B8972F', transition: { duration: 0.3 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface RestaurantSectionProps {}

interface BookingData {
  user_username: string;
  user_email: string;
  booking_type: string;
  restaurant_name: string;
  restaurant_city: string;
  booking_date: string;
  start_time: string;
  party_size: string;
  special_requests: string;
}

const RestaurantSection: React.FC<RestaurantSectionProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    user_username: '',
    user_email: '',
    booking_type: 'TABLE',
    restaurant_name: 'Smart Banquet and Resort',
    restaurant_city: 'Chitwan',
    booking_date: '',
    start_time: '',
    party_size: '',
    special_requests: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!bookingData.user_username || !bookingData.user_email || !bookingData.booking_date || !bookingData.start_time || !bookingData.party_size) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }

    setStatus({ type: null, message: 'Sending reservation...' });

    if (formRef.current) {
      emailjs
        .sendForm(
          'smart_garden_restaurant',
          'template_mxgpb7k',
          formRef.current,
          '42gma15X3fCcZ1vY-'
        )
        .then(
          () => {
            setStatus({ type: 'success', message: 'Reservation submitted successfully!' });
            setBookingData({
              user_username: '',
              user_email: '',
              booking_type: 'TABLE',
              restaurant_name: 'Smart Restaurant',
              restaurant_city: 'Chitwan',
              booking_date: '',
              start_time: '',
              party_size: '',
              special_requests: '',
            });
            setTimeout(() => {
              setIsModalOpen(false);
              setStatus({ type: null, message: '' });
            }, 2000);
          },
          (error) => {
            setStatus({ type: 'error', message: 'Failed to submit reservation. Please try again.' });
            console.error('EmailJS error:', error.text);
          }
        );
    }
  };

  return (
    <motion.section
      className="relative py-12 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154347-6e9e6e0e8f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 relative"
          variants={textVariants}
        >
          Dining Experience
          <motion.div
            className="absolute bottom-0 left-1/2 w-0 h-1"
            initial={{ width: 0 }}
            animate={{ width: '20%' }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          />
        </motion.h2>

        <motion.p
          className="text-center text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
          variants={textVariants}
        >
          Savor the finest culinary delights at Smart Banquet and Resort. Our restaurant offers an exquisite ambiance, blending local Nepali flavors with international cuisine, crafted by expert chefs to elevate your dining experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="relative p-6 bg-[url('https://images.unsplash.com/photo-1600585154347-6e9e6e0e8f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-md border border-gray-200"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
            <div className="relative z-10">
              <motion.div className="mb-4 overflow-hidden rounded-lg">
                <motion.img
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Continental Cuisine - Creamy Pasta"
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                  initial="rest"
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Continental Cuisine</h3>
              <p className="text-gray-700">
                Indulge in classic dishes like creamy pastas, grilled steaks, and delicate desserts.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative p-6 bg-[url('https://images.unsplash.com/photo-1600585154347-6e9e6e0e8f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-md border border-gray-200"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
            <div className="relative z-10">
              <motion.div className="mb-4 overflow-hidden rounded-lg">
                <motion.img
                  src="https://images.unsplash.com/photo-1726082788670-c60006875dfd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmVwYWxpJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Nepali Specialties - Momos"
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                  initial="rest"
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Nepali Specialties</h3>
              <p className="text-gray-700">
                Enjoy authentic dal bhat, momos, and spicy curries with a modern twist.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative p-6 bg-[url('https://images.unsplash.com/photo-1600585154347-6e9e6e0e8f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg shadow-md border border-gray-200"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
            <div className="relative z-10">
              <motion.div className="mb-4 overflow-hidden rounded-lg">
                <motion.img
                  src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Gourmet Selections - Signature Dish"
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                  initial="rest"
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gourmet Selections</h3>
              <p className="text-gray-700">
                Experience signature dishes with seasonal ingredients and innovative presentations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Dining Experience Gallery */}
        <div className="mt-16">
          <motion.h3
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Dining Spaces
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                src: restaurant,
                alt: "Elegant Dining Room"
              },
              {
                src: restaurant2,
                alt: "Indoor Seating"
              },
              {
                src: restaurnt3,
                alt: "Dining"
              }
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative h-[250px] overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 bg-[#62452a] text-white rounded-lg font-semibold hover:bg-[#B8972F] transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => setIsModalOpen(true)}
          >
            Book a Table
          </motion.button>
        </motion.div>

        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-md relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Book a Table</h3>

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

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="user_username" className="block text-gray-700 font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_username"
                    name="user_username"
                    value={bookingData.user_username}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452a]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={bookingData.user_email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452a]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="booking_date" className="block text-gray-700 font-medium mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="booking_date"
                    name="booking_date"
                    value={bookingData.booking_date}
                    onChange={handleChange}
                    min="2025-05-21" // Prevent past dates (current date: May 21, 2025)
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452a]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="start_time" className="block text-gray-700 font-medium mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    id="start_time"
                    name="start_time"
                    value={bookingData.start_time}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452a]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="party_size" className="block text-gray-700 font-medium mb-1">
                    Number of Guests
                  </label>
                  <select
                    id="party_size"
                    name="party_size"
                    value={bookingData.party_size}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452a]"
                    required
                  >
                    <option value="">Select number of guests</option>
                    {[...Array(20)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="special_requests" className="block text-gray-700 font-medium mb-1">
                    Special Requests
                  </label>
                  <textarea
                    id="special_requests"
                    name="special_requests"
                    value={bookingData.special_requests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452a]"
                  />
                </div>
                <input type="hidden" name="booking_type" value={bookingData.booking_type} />
                <input type="hidden" name="restaurant_name" value={bookingData.restaurant_name} />
                <input type="hidden" name="restaurant_city" value={bookingData.restaurant_city} />
                <motion.button
                  type="submit"
                  className="w-full px-6 py-2 text-white font-medium rounded-lg"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  Submit Reservation
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default RestaurantSection;

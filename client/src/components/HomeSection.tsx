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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface HomeSectionProps {}

interface BookingData {
  user_username: string;
  user_email: string;
  booking_type: string;
  restaurant_name: string;
  restaurant_city: string;
  booking_date: string;
  start_time: string;
  end_time?: string;
  party_size: string;
  event_title?: string;
  event_ticket_price?: string;
  total_price?: string;
  special_requests: string;
}

const HomeSection: React.FC<HomeSectionProps> = () => {
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
    event_title: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData((prev) => {
      const updatedData = { ...prev, [name]: value };

      return updatedData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = ['user_username', 'user_email', 'booking_date', 'start_time', 'party_size'];
    const hasMissingFields = requiredFields.some((field) => !bookingData[field as keyof BookingData]);
    if (hasMissingFields) {
      setStatus({ type: 'error', message: 'All required fields must be filled.' });
      return;
    }

    const payload: BookingData = {
      user_username: bookingData.user_username,
      user_email: bookingData.user_email,
      booking_type: bookingData.booking_type,
      restaurant_name: bookingData.restaurant_name,
      restaurant_city: bookingData.restaurant_city,
      booking_date: bookingData.booking_date,
      start_time: bookingData.start_time,
      party_size: bookingData.party_size,
      special_requests: bookingData.special_requests,
    };

    try {
      const response = await fetch('http://localhost:9001/api/bookings/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Booking submitted successfully!' });
        setBookingData({
          user_username: '',
          user_email: '',
          booking_type: 'TABLE',
          restaurant_name: 'Smart Banquet and Resort',
          restaurant_city: 'Chitwan',
          booking_date: '',
          start_time: '',
          party_size: '',
          special_requests: '',
          event_title: '',
        });
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus({ type: null, message: '' });
        }, 2000);
      } else {
        setStatus({ type: 'error', message: result.message || 'Failed to submit booking.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    }
  };

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
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 text-black font-semibold rounded-lg"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
        >
          Book Now
        </motion.button>
      </div>

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
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Make a Booking</h3>

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

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
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
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
                  required
                />
              </div>
              <div>
                <label htmlFor="booking_type" className="block text-gray-700 font-medium mb-1">
                  Booking Type
                </label>
                <select
                  id="booking_type"
                  name="booking_type"
                  value={bookingData.booking_type}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
                  required
                >
                  <option value="TABLE">Table Reservation</option>
                  <option value="EVENT">Event Booking</option>
                </select>
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
                  min="2025-05-20"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
                  required
                />
              </div>
              <div>
                <label htmlFor="start_time" className="block text-gray-700 font-medium mb-1">
                  Start Time
                </label>
                <input
                  type="time"
                  id="start_time"
                  name="start_time"
                  value={bookingData.start_time}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
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
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
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
              {bookingData.booking_type === 'EVENT' && (
                <>
                  <div>
                    <label htmlFor="event_title" className="block text-gray-700 font-medium mb-1">
                      Event Title
                    </label>
                    <input
                      type="text"
                      id="event_title"
                      name="event_title"
                      value={bookingData.event_title}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
                      required
                    />
                  </div>
                </>
              )}
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
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-2 text-white font-medium rounded-lg"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
              >
                Submit Booking
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default HomeSection;

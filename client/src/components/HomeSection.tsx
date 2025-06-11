import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import indoor3 from '../assets/indoor3.jpeg';

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
  contact_number: string;

}

const HomeSection: React.FC<HomeSectionProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    user_username: '',
    user_email: '',
    booking_type: '',
    restaurant_name: 'Smart Banquet and Resort',
    restaurant_city: 'Chitwan',
    booking_date: '',
    start_time: '',
    party_size: '',
    special_requests: '',
    event_title: '',
    contact_number: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = ['user_username', 'user_email', 'booking_date', 'start_time', 'party_size'];
    const hasMissingFields = requiredFields.some((field) => {
      const value = bookingData[field as keyof BookingData];
      return value === undefined || value === null || value === '';
    });

    if (hasMissingFields) {
      setStatus({ type: 'error', message: 'All required fields must be filled.' });
      return;
    }

    if (bookingData.booking_type === 'EVENT' && !bookingData.event_title) {
      setStatus({ type: 'error', message: 'Event title is required for event bookings.' });
      return;
    }

    const sanitizedData: BookingData = {
      user_username: bookingData.user_username || '',
      user_email: bookingData.user_email || '',
      booking_type: bookingData.booking_type || 'TABLE',
      restaurant_name: bookingData.restaurant_name || 'Smart Banquet and Resort',
      restaurant_city: bookingData.restaurant_city || 'Chitwan',
      booking_date: bookingData.booking_date || '',
      start_time: bookingData.start_time || '',
      party_size: bookingData.party_size || '',
      special_requests: bookingData.special_requests || '',
      event_title: bookingData.event_title || '',
      contact_number: bookingData.contact_number || '',
    };
    setStatus({ type: null, message: 'Submitting booking...' });

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
            setStatus({ type: 'success', message: 'Booking submitted successfully!' });
            setBookingData({
              user_username: '',
              user_email: '',
              booking_type: '',
              restaurant_name: 'Smart Restaurant',
              restaurant_city: 'Chitwan',
              booking_date: '',
              start_time: '',
              party_size: '',
              special_requests: '',
              event_title: '',
              contact_number: ''
            });
            setTimeout(() => {
              setIsModalOpen(false);
              setStatus({ type: null, message: '' });
            }, 2000);
          },
          (error) => {
            setStatus({ type: 'error', message: 'Failed to submit booking. Please try again.' });
            console.error('EmailJS error:', error.text || error);
          }
        );
    } else {
      setStatus({ type: 'error', message: 'Form reference is missing.' });
      console.error('formRef is null');
    }
  };

  return (
    <>
      <motion.section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('${indoor3}')`,
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
            Welcome to Smart Garden and Restaurant
          </motion.h1>
          <motion.p
            className="text-lg text-white max-w-2xl mx-auto mb-6"
            variants={textVariants}
          >
            Experience luxury and comfort at Smart Garden and Restaurant, nestled in the heart of Chitwan, Nepal. 
            Enjoy world-class amenities, exquisite dining, and a serene environment perfect for your next getaway.
          </motion.p>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 text-black font-semibold rounded-lg bg-[#D4AF37]"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
          >
            Book Now
          </motion.button>
        </div>

        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 w-full max-w-3xl max-h-[80vh] overflow-y-auto relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl"
              >
                ✕
              </button>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Make a Booking</h3>

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

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-gray-700 font-medium mb-1">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contact_number"
                      name="contact_number"
                      value={bookingData.contact_number}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
                      required
                    />
                  </div>
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62456A]"
                    required
                  >
                    <option value="TABLE">Table Reservation</option>
                    <option value="EVENT">Event Booking</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      min="2025-05-21"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="party_size" className="block text-gray-700 font-medium mb-1">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="party_size"
                    name="party_size"
                    value={bookingData.party_size}
                    onChange={handleChange}
                    min="1"
                    max="2000"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
                    placeholder="Enter number of guests"
                    required
                  />
                </div>
                {bookingData.booking_type === 'EVENT' && (
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
                      required
                    />
                  </div>
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
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62452A]"
                  />
                </div>
                <input type="hidden" name="restaurant_name" value={bookingData.restaurant_name} />
                <input type="hidden" name="restaurant_city" value={bookingData.restaurant_city} />
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 text-white font-medium rounded-lg bg-[#62452A]"
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
    </>
  );
};

export default HomeSection;
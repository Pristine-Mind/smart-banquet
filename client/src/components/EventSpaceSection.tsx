import React from 'react';
import { motion } from 'framer-motion';

const spaces = [
  {
    name: 'Grand Banquet Hall',
    image: 'https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/135367263_146099753980592_8792492053444381948_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_3jghIaxq0UQ7kNvwF5apYX&_nc_oc=AdnujJRzWxci4l9zk-ZDfW-DwTuGHKVvOqJfCrMnUA9KlcgKxzZUBbGh5S0fnV1QqwY8OpGDWgNjjLTAJ9PsOgrM&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=mmlMnEUZaczXWJCbZlqidg&oh=00_AfIpt5QMxN3IpmhFezjK_nuce-hxa1B8iH6410w50zNKsw&oe=6863492C',
    description: 'Our Grand Banquet Hall is perfect for weddings and large celebrations, accommodating up to 200 guests with elegant decor.',
  },
  {
    name: 'Private Dining Room',
    image: 'https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/485151416_1209746307822517_3282552096858187440_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iwxLRsEuZCYQ7kNvwFnEY8D&_nc_oc=Adll0QOLLiVWS1vAH3EUp6qcRAAJEMENzaOKJ58_X5zzFZuj007VVK_mwJ6GvwO_Oh3HrpIDsT-G90FZQKd7mONh&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=p1iRo6jYcy9yA_wB3ywyow&oh=00_AfJAn--xD3e5ChOTb1_R3CYwyec1yvvHSee08BwowvqBbw&oe=6841B46A',
    description: 'Enjoy an intimate dining experience in our Private Dining Room, ideal for family gatherings or corporate dinners.',
  },
  {
    name: 'Outdoor Party Terrace',
    image: 'https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/469449113_1068972905026601_6273194379615164465_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=irjkHxnX848Q7kNvwFmZBdv&_nc_oc=Adkai20kI7NYZ02zGr5mQrTqSzdA13AzC5HiI77AILuGjy-yaHaE_OF-lWN5ibfvM-7iPQFSRfIGc_TfYjU-V8rZ&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=ccONkUhlTUCQ7Bjcj29Geg&oh=00_AfIz6PpxNNZlTCDc0KqbfkVPrA63x04Mt-Jv8wAG-C_rRg&oe=6841C3D1',
    description: 'Host your next event on our Outdoor Party Terrace, offering a vibrant setting for up to 100 guests with stunning views.',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: '#D4AF37' },
  hover: {
    scale: 1.1,
    backgroundColor: '#B8972F',
    transition: { duration: 0.3 },
  },
};

interface EventSpacesSectionProps {}

const EventSpacesSection: React.FC<EventSpacesSectionProps> = () => {
  return (
    <motion.section
      className="py-12 bg-white"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Event Spaces & Dining Areas
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={cardContainerVariants}
        >
          {spaces.map((space) => (
            <motion.div
              key={space.name}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <img
                src={space.image}
                alt={space.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {space.name}
                </h3>
                <p className="text-gray-600 mb-4">{space.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EventSpacesSection;

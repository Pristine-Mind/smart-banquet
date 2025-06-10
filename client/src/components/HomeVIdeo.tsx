import React from 'react';
import { motion } from 'framer-motion';
import AutoPlayVideo from './AutoPlayVideo';

import video1 from '../assets/welcome.mp4';
import video2 from '../assets/welcome2.mp4';
import video3 from '../assets/welcome3.mp4';

interface ThreeVideoPlayerProps {
  className?: string;
}

const ThreeVideoPlayer: React.FC<ThreeVideoPlayerProps> = ({
  className = '',
}) => {
  const videos = [
    {
      src: video1,
      title: '',
    },
    {
      src: video2,
      title: '',
    },
    {
      src: video3,
      title: '',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={`w-full max-w-[1400px] mx-auto flex flex-col items-center gap-4 p-4 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-center min-h-[150px]">
        <motion.h1
          className="text-4xl font-bold text-black text-center drop-shadow-lg"
          variants={headingVariants}
        >
          Smart Garden and Restaurant
        </motion.h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        {videos.slice(0, 3).map((video, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-1/3"
            variants={videoVariants}
            custom={index}
          >
            <AutoPlayVideo
              src={video.src}
              title={video.title}
              loop={true}
              muted={true}
              controls={false}
              className="h-[400px] lg:h-[500px] rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ThreeVideoPlayer;
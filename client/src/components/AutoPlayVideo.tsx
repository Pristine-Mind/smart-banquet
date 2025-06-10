import React from 'react';
import { motion } from 'framer-motion';

interface AutoPlayVideoProps {
  src: string;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  title?: string;
}

const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({
  src,
  loop = true,
  muted = false,
  controls = false,
  className = '',
  title = 'Welcome to Smart Garden and Restaurant',
}) => {
  return (
    <div className={`w-full h-[700px] overflow-hidden mx-auto ${className} bg-white relative mb-8`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-4 left-0 right-0 z-10 text-center"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-white drop-shadow-lg"
        >
          {title}
        </motion.h1>
      </motion.div>
        
      <video
        className="w-full h-full object-cover"
        src={src}
        autoPlay
        muted={muted}
        loop={loop}
        playsInline
        controls={controls}
      />
    </div>
  );
};

export default AutoPlayVideo;
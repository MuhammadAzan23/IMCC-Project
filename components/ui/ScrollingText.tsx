
'use client';

import { motion } from 'framer-motion';

interface ScrollingTextProps {
  items: string[];
}

export default function ScrollingText({ items }: ScrollingTextProps) {
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex space-x-16"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...items, ...items].map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
          >
            <span 
              className="text-2xl md:text-3xl font-bold px-8 py-4 rounded-full bg-white shadow-lg"
              style={{ color: '#001f4d' }}
            >
              {item}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

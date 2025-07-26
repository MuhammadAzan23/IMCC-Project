
'use client';

import { motion } from 'framer-motion';

interface GlowTextProps {
  text: string;
  className?: string;
}

export default function GlowText({ text, className = '' }: GlowTextProps) {
  return (
    <motion.div
      className={`${className} relative`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.h2
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 bg-clip-text text-transparent"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 100%',
          filter: 'drop-shadow(0 0 30px rgba(14, 165, 233, 0.4))',
        }}
      >
        {text}
      </motion.h2>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 opacity-20 blur-2xl rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}

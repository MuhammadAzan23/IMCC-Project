'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ClipRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.1, delayChildren: delay },
  }),
};

const wordVariants = {
  hidden: { y: '100%' },
  visible: { y: '0%', transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
};

export default function ClipReveal({ text, className = '', delay = 0 }: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const words = text.split(' ');

  return (
    <motion.div
      ref={ref}
      className={`flex flex-wrap gap-x-[0.3em] ${className}`}
      variants={containerVariants}
      custom={delay}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

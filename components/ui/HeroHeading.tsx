'use client';

import { motion } from 'framer-motion';

interface HeroHeadingProps {
  text: string;
  className?: string;
}

export default function HeroHeading({ text, className = '' }: HeroHeadingProps) {
  return (
    <motion.h1
      className={`font-extrabold tracking-tight text-imcc-navy dark:text-white ${className}`}
      style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1.1 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {text}
    </motion.h1>
  );
}

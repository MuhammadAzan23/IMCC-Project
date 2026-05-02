'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollLineProps {
  className?: string;
}

export default function ScrollLine({ className = '' }: ScrollLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg
        viewBox="0 0 20 600"
        className="absolute left-1/2 -translate-x-1/2 h-full w-5"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Background path (faint) */}
        <path
          d="M10 0 C10 100, 10 100, 10 150 S10 250, 10 300 S10 400, 10 450 S10 550, 10 600"
          stroke="currentColor"
          strokeWidth={2}
          className="text-gray-200 dark:text-white/10"
        />
        {/* Animated path */}
        <motion.path
          d="M10 0 C10 100, 10 100, 10 150 S10 250, 10 300 S10 400, 10 450 S10 550, 10 600"
          stroke="#0ea5e9"
          strokeWidth={3}
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}

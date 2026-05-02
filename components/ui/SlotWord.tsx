'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlotWordProps {
  words: string[];
  className?: string;
}

export default function SlotWord({ words, className = '' }: SlotWordProps) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure the longest word on mount for fixed width
  useEffect(() => {
    if (measureRef.current) {
      const spans = measureRef.current.children;
      let maxW = 0;
      for (let i = 0; i < spans.length; i++) {
        maxW = Math.max(maxW, (spans[i] as HTMLElement).offsetWidth);
      }
      setWidth(maxW + 4); // small buffer
    }
  }, [words]);

  const cycle = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const interval = setInterval(cycle, 2500);
    return () => clearInterval(interval);
  }, [cycle]);

  return (
    <>
      {/* Hidden measurement span */}
      <span ref={measureRef} className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        {words.map((w, i) => (
          <span key={i} className={`inline-block font-bold ${className}`}>{w}</span>
        ))}
      </span>

      <span
        className="inline-block text-left relative"
        style={{
          width: width ? `${width}px` : 'auto',
          height: '1.2em',
          perspective: '800px',
          transformStyle: 'preserve-3d',
          verticalAlign: 'bottom',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            className={`inline-block text-imcc-sky font-bold ${className}`}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ position: 'absolute', left: 0, transformOrigin: 'center bottom' }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}

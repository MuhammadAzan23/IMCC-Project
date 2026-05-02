'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useTransform, motion, animate } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = '', prefix = '', label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    const n = Math.round(v);
    return n >= 1000 ? n.toLocaleString() : String(n);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-black text-imcc-navy dark:text-white mb-2">
        {prefix && <span className="text-imcc-sky">{prefix}</span>}
        <motion.span>{rounded}</motion.span>
        {suffix && <span className="text-imcc-sky">{suffix}</span>}
      </div>
      <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">
        {label}
      </p>
    </div>
  );
}

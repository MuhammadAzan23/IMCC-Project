'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GlowText from '@/components/ui/GlowText';

export default function ResultPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-imcc-navy transition-colors duration-300">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-imcc-navy">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-imcc-navy via-imcc-navy to-blue-950 opacity-90" />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 w-[50rem] h-[50rem] bg-sky-500/10 rounded-full blur-[140px]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 font-bold text-sm tracking-wider uppercase mb-8">
              Student Portal
            </div>

            <div className="bg-white/5 backdrop-blur-3xl p-12 sm:p-20 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden group mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-24 h-24 bg-sky-500/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-sky-500 border border-sky-500/20">
                  <i className="ri-news-line text-5xl" />
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  Result <span className="text-sky-400">Announcement</span>
                </h1>

                <div className="h-1 w-24 bg-sky-500 mx-auto mb-10 rounded-full" />

                <h2 className="text-2xl sm:text-4xl font-black text-white/90 mb-8 tracking-[0.2em] uppercase">
                  Coming Soon<span className="animate-pulse">...</span>
                </h2>

                <p className="text-xl text-blue-100/60 max-w-2xl mx-auto leading-relaxed mb-12 italic">
                  "Excellence is not an act, but a habit. Our examiners are meticulously processing thousands of achievements."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                    <p className="text-sky-400 font-bold text-sm uppercase tracking-widest mb-1">Upcoming</p>
                    <p className="text-white font-bold">Annual Board Result</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                    <p className="text-sky-400 font-bold text-sm uppercase tracking-widest mb-1">Session</p>
                    <p className="text-white font-bold">2024-2025</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-lg transition-all border border-white/10 backdrop-blur-md"
              >
                <i className="ri-arrow-left-line" />
                Back to Campus Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

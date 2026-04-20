'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResultPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-imcc-navy transition-colors duration-300">
      {/* Hero Section */}
      <section className="hero-navy min-h-screen">
        <div className="hero-gradient-bg" />

        {/* Animated Orbs */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -right-24 w-[50rem] h-[50rem] bg-sky-500/10 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] bg-imcc-blue/10 rounded-full blur-[120px]"
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="section-heading-badge border border-sky-500/20 mb-8">Student Portal</div>

            <div className="bg-white/5 backdrop-blur-xl p-10 sm:p-16 rounded-6xl border border-white/10 shadow-2xl relative overflow-hidden group mb-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-20 h-20 bg-sky-500/10 rounded-4xl flex items-center justify-center mx-auto mb-8 text-sky-500 border border-sky-500/20">
                  <i className="ri-news-line text-4xl" />
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Result <span className="text-sky-400">Announcement</span>
                </h1>

                <div className="h-1 w-20 bg-sky-500 mx-auto mb-8 rounded-full" />

                <h2 className="text-2xl sm:text-3xl font-black text-white/90 mb-6 tracking-[0.15em] uppercase">
                  Coming Soon<span className="animate-pulse">...</span>
                </h2>

                <p className="text-lg text-blue-100/60 max-w-xl mx-auto leading-relaxed mb-10 italic">
                  "Excellence is not an act, but a habit. Our examiners are meticulously processing thousands of achievements."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-1">Type</p>
                    <p className="text-white font-bold text-sm">Board Result</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-1">Session</p>
                    <p className="text-white font-bold text-sm">2024–2025</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-1">Status</p>
                    <p className="text-amber-400 font-bold text-sm">Pending</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold transition-all border border-white/10 backdrop-blur-md"
                >
                  <i className="ri-arrow-left-line" />
                  Back to Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-2xl font-bold transition-all shadow-lg shadow-sky-500/20"
                >
                  <i className="ri-question-line" />
                  Ask About Results
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

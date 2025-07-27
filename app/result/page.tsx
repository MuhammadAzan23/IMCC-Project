'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlowText from '@/components/ui/GlowText';

export default function ResultPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      {/* Result Announcement Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-br from-blue-50 via-white to-sky-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10"></div>

        <div className="relative z-10 container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-blue-950">
              Result Announcement
            </h1>

            <h2
  className="text-3xl md:text-5xl font-bold text-blue-800 leading-relaxed overflow-visible drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]"
>
  Coming Soon...
</h2>


            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our team is finalizing the results. Please check back later to view your marks.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6"
            >
              <a
                href="/"
                className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#001f4d' }}
              >
                Back to Home
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

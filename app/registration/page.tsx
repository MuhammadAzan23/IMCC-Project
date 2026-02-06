'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { memo } from 'react';
import RegistrationForm from '@/components/ui/RegistrationForm';

const Registration = memo(() => {
  return (
    <div className="min-h-screen bg-white dark:bg-imcc-navy transition-colors duration-300">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden bg-imcc-navy">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-imcc-navy via-imcc-navy to-blue-950 opacity-90" />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-sky-500/10 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 font-bold text-sm tracking-wider uppercase mb-8">
              Admissions Open
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Join the <span className="text-sky-400">Elite</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Secure your future today. Register now and become a part of Karachi's most prestigious coaching community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <RegistrationForm />
          </motion.div>
        </div>

        {/* Supporting Text */}
        <div className="container mx-auto px-4 text-center mt-20">
          <p className="text-gray-400 dark:text-gray-500 font-medium flex items-center justify-center gap-2">
            <i className="ri-shield-check-line text-sky-500 text-xl" />
            Your information is secure and will only be used for admission purposes.
          </p>
        </div>
      </section>
    </div>
  );
});

export default Registration;
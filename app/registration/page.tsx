'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { memo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/ui/RegistrationForm';

const Registration = memo(() => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode based on system preference or local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Register - I M Collegiate Coaching Centre</title>
        <meta
          name="description"
          content="Register at I M Collegiate Coaching Centre in Karachi, Pakistan, to start your journey towards academic excellence."
        />
        <meta
          name="keywords"
          content="registration, coaching, education, Karachi, I M Collegiate"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        {/* Header */}
        <Header />

        <section className="relative pt-24 min-h-screen" role="main">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10 -z-10" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-4"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className={`text-3xl md:text-4xl font-bold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Register Now
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className={`text-lg ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  } max-w-2xl mx-auto`}
                >
                  Join our coaching centre and start your journey towards academic excellence
                </motion.p>
              </motion.div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              {/* Placeholder for RegistrationForm */}
              {/* To implement class-specific sheet submission, add a class selection field in RegistrationForm */}
              {/* Example: <select name="class"> with options for Class 9th, 10th, etc., and submit to /api/register */}
              <RegistrationForm />
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
});

export default Registration;
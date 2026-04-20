'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import RegistrationForm from '@/components/ui/RegistrationForm';

const Registration = memo(() => {
  return (
    <div className="min-h-screen bg-white dark:bg-imcc-navy transition-colors duration-300">
      {/* Hero Section */}
      <section className="hero-navy min-h-[50vh]">
        <div className="hero-gradient-bg" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-sky-500/10 rounded-full blur-[120px]"
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-heading-badge border border-sky-500/20 mb-8">Admissions Open</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Student <span className="text-sky-400">Registration</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Fill the form below to register. Your data will be securely stored and our team will contact you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-2 space-y-6"
              >
                {[
                  { icon: 'ri-shield-check-line', title: 'Secure Data', description: 'Your information is encrypted and only used for admission purposes.' },
                  { icon: 'ri-phone-line', title: 'Quick Response', description: 'Our team will contact you within 24 hours of registration.' },
                  { icon: 'ri-group-line', title: 'Limited Seats', description: 'Small batch sizes ensure personalized attention for every student.' },
                  { icon: 'ri-award-line', title: 'Proven Results', description: '95% success rate across all programs over 20+ years.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-11 h-11 flex-shrink-0 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-500">
                      <i className={`${item.icon} text-xl`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-imcc-navy dark:text-white text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <RegistrationForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Registration.displayName = 'Registration';

export default Registration;
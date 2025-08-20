'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import logo from '../../images/logo.jpg'; // Ensure the logo path is correct


const Classes = memo(() => {
  const classes = [
    {
      grade: 'Class 9th (Science Group)',
      subjects: ['English', 'Urdu', 'Islamiat', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
      description: 'Build a strong foundation for your academic journey with comprehensive coverage of all subjects.',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20grade%209%20classroom%20studying%20mathematics%20and%20science%2C%20modern%20educational%20setting%2C%20bright%20classroom%20environment%2C%20students%20with%20books%20and%20notebooks&width=400&height=300&seq=class9&orientation=landscape',
      price: 'PKR 2,200/month',
      duration: '2.5 hours daily',
    },
    {
      grade: 'Class 10th (Science Group)',
      subjects: ['English', 'Urdu', 'Pakistan Studies', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
      description: 'Prepare for your matriculation exams with intensive practice and expert guidance.',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20grade%2010%20classroom%20taking%20exam%20preparation%2C%20focused%20study%20environment%2C%20modern%20educational%20setting%2C%20students%20with%20textbooks&width=400&height=300&seq=class10&orientation=landscape',
      price: 'PKR 2,200/month',
      duration: '2.5 hours daily',
    },
    {
      grade: 'Class 11th Pre-Medical',
      subjects: ['English', 'Urdu', 'Physics', 'Chemistry', 'Biology'],
      description: 'Specialized coaching for medical entrance exams with focus on MDCAT preparation.',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20biology%20and%20chemistry%20in%20modern%20laboratory%20setting%2C%20medical%20books%20and%20equipment%2C%20bright%20educational%20environment&width=400&height=300&seq=premedical&orientation=landscape',
      price: 'PKR 2,500/month',
      duration: '3 hours daily',
    },
    {
      grade: 'Class 11th Pre-Engineering/Computer Science',
      subjects: ['English', 'Urdu', 'Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
      description: 'Engineering and computer science-focused curriculum with emphasis on problem-solving and technical skills.',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20mathematics%20and%20physics%20in%20modern%20classroom%2C%20engineering%20books%20and%20calculators%2C%20bright%20educational%20environment&width=400&height=300&seq=preengineering&orientation=landscape',
      price: 'PKR 2,500/month',
      duration: '3 hours daily',
    },
    {
      grade: 'Class 11th Commerce',
      subjects: ['English', 'Urdu', 'Principles of Accounting', 'Principles of Economics', 'Principles of Commerce', 'Business Mathematics'],
      description: 'Comprehensive business education with practical applications and real-world examples.',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20commerce%20and%20business%20studies%20in%20modern%20classroom%2C%20business%20books%20and%20calculators%2C%20bright%20educational%20environment&width=400&height=300&seq=commerce&orientation=landscape',
      price: 'PKR 2,500/month',
      duration: '3 hours daily',
    },
    {
      grade: 'Class 12th Pre-Medical',
      subjects: ['English', 'Urdu', 'Physics', 'Chemistry', 'Biology'],
      description: 'Final year preparation with intensive MDCAT coaching and board exam focus.',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20grade%2012%20medical%20preparation%20class%2C%20intensive%20study%20session%2C%20modern%20laboratory%20setting%2C%20medical%20textbooks&width=400&height=300&seq=class12med&orientation=landscape',
      price: 'PKR 2,500/month',
      duration: '3 hours daily',
    },
    {
      grade: 'Class 12th Pre-Engineering/Computer Science',
      subjects: ['English', 'Urdu', 'Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
      description: 'Advanced engineering and computer science preparation for board exams and entrance tests.',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20grade%2012%20engineering%20preparation%20class%2C%20advanced%20mathematics%20and%20physics%2C%20modern%20classroom%20setting%2C%20engineering%20books&width=400&height=300&seq=class12eng&orientation=landscape',
      price: 'PKR 2,500/month',
      duration: '3 hours daily',
    },
    {
      grade: 'Class 12th Commerce',
      subjects: ['English', 'Urdu', 'Principles of Accounting', 'Principles of Economics', 'Banking', 'Commercial Geography'],
      description: 'Advanced business education focusing on board exams and professional skills.',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20commerce%20and%20business%20studies%20in%20modern%20classroom%2C%20business%20books%20and%20calculators%2C%20bright%20educational%20environment&width=400&height=300&seq=commerce&orientation=landscape',
      price: 'PKR 2,500/month',
      duration: '3 hours daily',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
     <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
          {/* Background Image */}
          <img
            src={logo.src}
            alt="IMCC Logo"
            className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm"
            aria-hidden="true"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/10" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 md:mt-20"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight"
              style={{ color: '#001f4d' }}
            >
              Explore Our Classes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4 sm:mt-6"
            >
              Comprehensive educational programs for Class 9th, 10th, and 11th/12th (Pre-Medical, Pre-Engineering/Computer Science, Commerce), aligned with Karachi Board syllabus
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#001f4d' }}>
              Choose Your Path
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Select the perfect program for your academic journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {classes.map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.grade}
                    className="w-full h-full object-cover object-top"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
                    style={{ backgroundColor: '#001f4d' }}
                  >
                    {classItem.price}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4" style={{ color: '#001f4d' }}>
                    {classItem.grade}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                    {classItem.description}
                  </p>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 text-base sm:text-lg" style={{ color: '#001f4d' }}>
                      Subjects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {classItem.subjects.map((subject, subIndex) => (
                        <span
                          key={subIndex}
                          className="bg-sky-50 text-sky-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-base sm:text-lg text-gray-600 flex items-center gap-1">
                      <i className="ri-time-line text-lg sm:text-xl" />
                      {classItem.duration}
                    </span>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/registration"
                      className="w-full block text-center text-white py-2 sm:py-3 px-6 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                      style={{ backgroundColor: '#001f4d' }}
                      aria-label={`Register for ${classItem.grade}`}
                    >
                      Register Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#001f4d' }}>
              What Makes Our Classes Special?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Features that set us apart from other coaching centers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: 'ri-user-star-line',
                title: 'Expert Teachers',
                description: 'Highly qualified and experienced faculty members with proven track records',
              },
              {
                icon: 'ri-book-open-line',
                title: 'Comprehensive Curriculum',
                description: 'Complete syllabus coverage with regular assessments and progress tracking',
              },
              {
                icon: 'ri-group-line',
                title: 'Small Batch Size',
                description: 'Limited students per class ensuring personalized attention for everyone',
              },
              {
                icon: 'ri-time-line',
                title: 'Flexible Timings',
                description: 'Multiple time slots available to suit different student schedules',
              },
              {
                icon: 'ri-award-line',
                title: 'Proven Results',
                description: 'Consistent high success rates in board exams and entrance tests',
              },
              {
                icon: 'ri-question-answer-line',
                title: 'Doubt Resolution',
                description: 'Dedicated time and support for clearing all your academic doubts',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center bg-gradient-to-br from-blue-50 to-sky-50 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
                  style={{ backgroundColor: '#001f4d' }}
                >
                  <i className={`${feature.icon} text-xl sm:text-2xl text-white`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: '#001f4d' }}>
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#001f4d' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-sky-900/20" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-xl mx-auto">
              Join our comprehensive coaching programs and unlock your full academic potential with expert guidance.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/registration"
                className="inline-block bg-white text-blue-950 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:shadow-xl whitespace-nowrap"
                aria-label="Enroll in our coaching programs"
              >
                Enroll Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    // Placeholder for RegistrationForm integration
    // To send form data to class-specific Google Sheets, include a <select> in RegistrationForm with options matching the 'grade' field above (e.g., 'Class 9th (Science Group)', 'Class 11th Pre-Engineering/Computer Science')
    // Example: On submission, POST to /api/register with selected class, and append data to the corresponding sheet/tab
  );
});

export default Classes;
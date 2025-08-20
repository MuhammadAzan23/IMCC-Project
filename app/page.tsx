'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { memo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlowText from '@/components/ui/GlowText';
import ScrollingText from '@/components/ui/ScrollingText';
import AnimatedText from '@/components/ui/AnimatedText';
import logo from '../images/logo.jpg';

const Home = memo(() => {
  const classCategories = [
    'Class 9th • Class 10th • Class 11th • Class 12th',
    'Pre-Medical • Pre-Engineering • Computer Science • Commerce',
    'Expert Teachers • Modern Facilities • Proven Results',
  ];

  const features = [
    {
      icon: 'ri-book-open-line',
      title: 'Expert Faculty',
      description: 'Highly qualified teachers with years of experience in their respective fields.',
    },
    {
      icon: 'ri-award-line',
      title: 'Proven Results',
      description: 'Consistent track record of excellent results in board exams and entrance tests.',
    },
    {
      icon: 'ri-group-line',
      title: 'Small Batches',
      description: 'Limited students per batch to ensure personalized attention and better learning.',
    },
    {
      icon: 'ri-time-line',
      title: 'Flexible Timings',
      description: 'Multiple time slots available to accommodate different student schedules.',
    },
  ];

  const testimonials = [
    {
      name: 'Mustafa Ismail',
      grade: 'Class 10th ',
      text: 'I M Collegiate helped me achieve 98% in my  exams. The teachers are amazing!',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20male%20student%20smiling%20confidently%20in%20school%20uniform%20with%20books%2C%20clean%20studio%20background%2C%20professional%20portrait%20style&width=100&height=100&seq=student1&orientation=squarish',
    },
    {
      name: 'Fatima Khan',
      grade: 'Class 11th Pre-Engineering',
      text: 'The coaching methods are excellent. I improved my physics and mathematics significantly.',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20female%20student%20smiling%20confidently%20wearing%20hijab%20with%20books%2C%20clean%20studio%20background%2C%20professional%20portrait%20style&width=100&height=100&seq=student2&orientation=squarish',
    },
    {
      name: 'Ali Raza',
      grade: 'Class 10th',
      text: 'Great environment for learning. The teachers explain complex topics in simple ways.',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20teenage%20boy%20student%20smiling%20with%20school%20bag%2C%20clean%20studio%20background%2C%20professional%20portrait%20style&width=100&height=100&seq=student3&orientation=squarish',
    },
  ];

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>I M Collegiate Coaching Centre - Home</title>
        <meta
          name="description"
          content="Welcome to I M Collegiate Coaching Centre in Karachi, Pakistan. Join our classes for Class 9th to 12th and achieve academic excellence with expert faculty."
        />
        <meta
          name="keywords"
          content="coaching centre, Karachi, education, Class 9th, Class 10th, Class 11th, Class 12th, I M Collegiate"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
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
              className="mb-12"
            >
              {/* Responsive Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight"
                style={{ color: '#001f4d' }}
              >
                Welcome to I M Collegiate Coaching Centre
              </motion.h1>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg text-gray-600 font-medium mt-4 sm:mt-6">
                <i className="ri-map-pin-line text-lg sm:text-xl md:text-2xl" style={{ color: '#001f4d' }} />
                <span>Karachi, Pakistan</span>
              </div>
            </motion.div>

            <GlowText text="Learn it. Live it. Pass it on." className="mb-6 sm:mb-8 md:mb-12" />

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col space-y-2 sm:space-y-3 md:flex-row md:space-y-0 md:space-x-4 md:justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/registration"
                  className="inline-block text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:shadow-xl whitespace-nowrap"
                  style={{ backgroundColor: '#001f4d' }}
                >
                  Register Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/classes"
                  className="inline-block border-2 hover:bg-blue-50 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:shadow-lg whitespace-nowrap"
                  style={{ borderColor: '#001f4d', color: '#001f4d' }}
                >
                  View Classes
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scrolling Text Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-sky-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <ScrollingText items={classCategories} />
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl p-6 sm:p-8 shadow-xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=Modern%20Pakistani%20educational%20classroom%20with%20students%20studying%2C%20bright%20natural%20lighting%2C%20clean%20minimalist%20design%2C%20navy%20blue%20and%20white%20color%20scheme%2C%20inspiring%20academic%20environment%20with%20books%20and%20learning%20materials&width=600&height=400&seq=about1&orientation=landscape"
                    alt="About I M Collegiate"
                    className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#001f4d' }}>
                  About I M Collegiate
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  We provide comprehensive education with modern teaching methods and experienced faculty for students from Class 9th to 12th, including all streams of Intermediate education.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Our mission is to empower students with quality education, preparing them for success in their academic journey and future careers through innovative teaching and personalized attention.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/about"
                    className="inline-block text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:shadow-xl whitespace-nowrap"
                    style={{ backgroundColor: '#001f4d' }}
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Classes Section */}
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
                Our Classes
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Comprehensive education programs for all academic levels
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { grade: 'Class 9th', subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'Computer'] },
                { grade: 'Class 10th', subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'Computer'] },
                { grade: 'Class 11th', subjects: ['Pre-Medical', 'Pre-Engineering', 'Computer Science', 'Commerce'] },
                { grade: 'Class 12th', subjects: ['Pre-Medical', 'Pre-Engineering', 'Computer Science', 'Commerce'] },
              ].map((classItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
                    style={{ backgroundColor: '#001f4d' }}
                  >
                    <i className="ri-book-open-line text-xl sm:text-2xl text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center" style={{ color: '#001f4d' }}>
                    {classItem.grade}
                  </h3>
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {classItem.subjects.map((subject, subIndex) => (
                      <div
                        key={subIndex}
                        className="bg-sky-50 text-sky-800 px-3 py-1 rounded-full text-xs sm:text-sm text-center"
                      >
                        {subject}
                      </div>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/registration"
                      className="w-full block text-center text-white py-2 sm:py-3 px-6 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                      style={{ backgroundColor: '#001f4d' }}
                    >
                      Register Now
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                Why Choose I M Collegiate?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                We provide comprehensive education with modern teaching methods and experienced faculty.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => (
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

        {/* Testimonials Section */}
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
                What Our Students Say
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Success stories from our brilliant students
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg" style={{ color: '#001f4d' }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sky-600 text-xs sm:text-sm">{testimonial.grade}</p>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 italic">"{testimonial.text}"</p>
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
                Ready to Start Your Journey?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-xl mx-auto">
                Join thousands of successful students who have achieved their dreams with I M Collegiate Coaching Centre.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/registration"
                  className="inline-block bg-white text-blue-950 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:shadow-xl whitespace-nowrap"
                >
                  Enroll Today
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
});

export default Home;
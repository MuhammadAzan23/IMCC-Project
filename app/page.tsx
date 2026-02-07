'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { memo } from 'react';
import GlowText from '@/components/ui/GlowText';
import ScrollingText from '@/components/ui/ScrollingText';
import AnimatedText from '@/components/ui/AnimatedText';


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
      name: 'Khatima',
      grade: 'Class 11th Computer Science',
      text: 'The coaching methods are excellent, and I have significantly improved my physics and mathematics..',
      image:
        'https://readdy.ai/api/search-image?query=Pakistani%20female%20student%20smiling%20confidently%20wearing%20hijab%20with%20books%2C%20clean%20studio%20background%2C%20professional%20portrait%20style&width=100&height=100&seq=student2&orientation=squarish',
    },
    {
      name: 'Muhammad Amir',
      grade: 'Class 12th',
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


      {/* Hero Section */}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
        {/* Background Image */}
        <img
          src={'/images/logo.jpg'}
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
      <section className="py-12 bg-imcc-navy overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollingText items={classCategories} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 sm:py-32 bg-white dark:bg-imcc-navy relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20Pakistani%20educational%20classroom%20with%20students%20studying%2C%20bright%20natural%20lighting%2C%20clean%20minimalist%20design%2C%20navy%20blue%20and%20white%20color%20scheme%2C%20inspiring%20academic%20environment%20with%20books%20and%20learning%20materials&width=600&height=400&seq=about1&orientation=landscape"
                  alt="About I M Collegiate"
                  className="w-full h-[30rem] object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-imcc-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-3xl font-bold mb-2">20+ Years</p>
                  <p className="text-sky-400 font-medium">Of Academic Excellence</p>
                </div>
              </div>
              {/* Decorative background element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-imcc-blue/10 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-sm tracking-wider uppercase mb-6">
                Our legacy
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-imcc-navy dark:text-white leading-tight">
                Empowering Minds Since <span className="text-sky-500">2004</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I M Collegiate Coaching Centre stands as a beacon of academic excellence in Karachi. For two decades, we've nurtured thousands of students, guiding them through the critical years of Class 9th to 12th.
                </p>
                <p>
                  Our specialized coaching methodologies, combined with an elite faculty, ensure that every student doesn't just learn, but masters their subjects in Pre-Medical, Pre-Engineering, Computer Science, and Commerce.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-imcc-navy dark:text-white mb-2">95%</p>
                  <p className="text-gray-500 dark:text-gray-400">Success Rate</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-imcc-navy dark:text-white mb-2">15000+</p>
                  <p className="text-gray-500 dark:text-gray-400">Total Alumni</p>
                </div>
              </div>
              <motion.div className="mt-12" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="px-10 py-5 bg-imcc-navy dark:bg-white text-white dark:text-imcc-navy rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
                >
                  Discover Our Story
                  <i className="ri-arrow-right-line" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-imcc-navy/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-sm tracking-wider uppercase mb-6">
              Our programs
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-imcc-navy dark:text-white">
              Specialized Coaching Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tailored academic paths designed to help you excel in board examinations and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { grade: 'Class 9th', icon: 'ri-book-3-line', subjects: ['Physics', 'Chemistry', 'Biology', 'Math'] },
              { grade: 'Class 10th', icon: 'ri-flask-line', subjects: ['Physics', 'Chemistry', 'Biology', 'Math'] },
              { grade: 'Class 11th', icon: 'ri-microscope-line', subjects: ['Pre-Med', 'Pre-Eng', 'CS', 'Commerce'] },
              { grade: 'Class 12th', icon: 'ri-global-line', subjects: ['Pre-Med', 'Pre-Eng', 'CS', 'Commerce'] },
            ].map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-[2rem] hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-8 text-sky-600 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                    <i className={`${classItem.icon} text-3xl`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-imcc-navy dark:text-white">
                    {classItem.grade}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {classItem.subjects.map((subject, subIndex) => (
                      <span
                        key={subIndex}
                        className="bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-sky-500/10 group-hover:text-sky-600 transition-colors"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/registration"
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl border-2 border-imcc-navy/10 dark:border-white/10 font-bold text-imcc-navy dark:text-white hover:bg-imcc-navy dark:hover:bg-sky-500 hover:text-white dark:hover:text-white transition-all duration-300"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white dark:bg-imcc-navy relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-sm tracking-wider uppercase mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-imcc-navy dark:text-white">
              The I M Collegiate <span className="text-sky-500">Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine traditional values with modern methodologies to provide an unmatched learning environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-transparent hover:border-sky-500/20 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white dark:bg-white/10 rounded-2xl shadow-lg flex items-center justify-center mb-8 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                  <i className={`${feature.icon} text-3xl`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-imcc-navy dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-imcc-navy/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-sm tracking-wider uppercase mb-6">
              Testimonials
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-imcc-navy dark:text-white">
              Success Stories from <span className="text-sky-500">Our Students</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/10"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-sky-500 rounded-lg flex items-center justify-center text-white">
                      <i className="ri-double-quotes-r text-xs" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-imcc-navy dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sky-600 dark:text-sky-400 text-sm font-medium">{testimonial.grade}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="mt-8 flex gap-1 text-sky-500">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-imcc-navy">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-sky-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-imcc-blue/10 rounded-full blur-3xl -ml-48 -mb-48" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-12 sm:p-20 rounded-[3rem] shadow-2xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Secure Your <span className="text-sky-400">Academic Future?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Admission for the new session is now open. Join Karachi's premier coaching centre and start your journey towards excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/registration"
                className="px-12 py-5 bg-sky-500 hover:bg-sky-400 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-sky-500/20"
              >
                Start Registration
              </Link>
              <Link
                href="/contact"
                className="px-12 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-xl transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
});

export default Home;
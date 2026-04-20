'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { memo } from 'react';
import GlowText from '@/components/ui/GlowText';
import ScrollingText from '@/components/ui/ScrollingText';

const Home = memo(() => {
  const classCategories = [
    'Class 9th • Class 10th • Class 11th • Class 12th',
    'Pre-Medical • Pre-Engineering • Computer Science • Commerce',
    'Expert Teachers • Modern Facilities • Proven Results',
  ];

  const features = [
    { icon: 'ri-book-open-line', title: 'Expert Faculty', description: 'Highly qualified teachers with years of experience in their respective fields.' },
    { icon: 'ri-award-line', title: 'Proven Results', description: 'Consistent track record of excellent results in board exams and entrance tests.' },
    { icon: 'ri-group-line', title: 'Small Batches', description: 'Limited students per batch to ensure personalized attention and better learning.' },
    { icon: 'ri-time-line', title: 'Flexible Timings', description: 'Multiple time slots available to accommodate different student schedules.' },
  ];

  const testimonials = [
    {
      name: 'Mustafa Ismail',
      grade: 'Class 10th',
      text: 'I M Collegiate helped me achieve 98% in my exams. The teachers are amazing!',
      image: 'https://readdy.ai/api/search-image?query=Pakistani%20male%20student%20smiling%20confidently%20in%20school%20uniform%20with%20books%2C%20clean%20studio%20background%2C%20professional%20portrait%20style&width=100&height=100&seq=student1&orientation=squarish',
    },
    {
      name: 'Khatima',
      grade: 'Class 11th Computer Science',
      text: 'The coaching methods are excellent, and I have significantly improved my physics and mathematics.',
      image: 'https://readdy.ai/api/search-image?query=Pakistani%20female%20student%20smiling%20confidently%20wearing%20hijab%20with%20books%2C%20clean%20studio%20background%2C%20professional%20portrait%20style&width=100&height=100&seq=student2&orientation=squarish',
    },
    {
      name: 'Muhammad Amir',
      grade: 'Class 12th',
      text: 'Great environment for learning. The teachers explain complex topics in simple ways.',
      image: 'https://readdy.ai/api/search-image?query=Pakistani%20teenage%20boy%20student%20smiling%20with%20school%20bag%2C%20clean%20studio%20background%2C%20professional%20portrait%20style&width=100&height=100&seq=student3&orientation=squarish',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-navy min-h-screen">
        <div className="hero-gradient-bg" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[50rem] h-[50rem] bg-sky-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] bg-imcc-blue/10 rounded-full blur-[100px]"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-heading-badge border border-sky-500/20 mb-6">
              Since 2004 • Karachi, Pakistan
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-sky-400">I M Collegiate</span>{' '}
              Coaching Centre
            </h1>

            <GlowText text="Learn it. Live it. Pass it on." className="mb-10" />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/registration"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-sky-500/20"
                >
                  Register Now
                  <i className="ri-arrow-right-line" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/classes"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <i className="ri-book-open-line" />
                  View Classes
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="py-8 bg-imcc-navy overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4">
          <ScrollingText items={classCategories} />
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white dark:bg-imcc-navy relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20Pakistani%20educational%20classroom%20with%20students%20studying%2C%20bright%20natural%20lighting%2C%20clean%20minimalist%20design%2C%20navy%20blue%20and%20white%20color%20scheme%2C%20inspiring%20academic%20environment%20with%20books%20and%20learning%20materials&width=600&height=400&seq=about1&orientation=landscape"
                  alt="About I M Collegiate"
                  className="w-full h-[28rem] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-imcc-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-3xl font-bold mb-1">20+ Years</p>
                  <p className="text-sky-400 font-medium">Of Academic Excellence</p>
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-imcc-blue/10 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="section-heading-badge">Our Legacy</div>
              <h2 className="section-heading leading-tight">
                Empowering Minds Since <span className="text-sky-500">2004</span>
              </h2>
              <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                <p>
                  I M Collegiate Coaching Centre stands as a beacon of academic excellence in Karachi. For two decades, we've nurtured thousands of students, guiding them through the critical years of Class 9th to 12th.
                </p>
                <p>
                  Our specialized coaching methodologies, combined with an elite faculty, ensure that every student doesn't just learn, but masters their subjects.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                  <p className="text-3xl font-bold text-imcc-navy dark:text-white mb-1">95%</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Success Rate</p>
                </div>
                <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                  <p className="text-3xl font-bold text-imcc-navy dark:text-white mb-1">15000+</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Alumni</p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                  Discover Our Story
                  <i className="ri-arrow-right-line" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="section-padding bg-imcc-surface dark:bg-imcc-navy/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-heading-badge">Our Programs</div>
            <h2 className="section-heading">Specialized Coaching Programs</h2>
            <p className="section-subtext">Tailored academic paths designed to help you excel in board examinations and beyond.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { grade: 'Class 9th', icon: 'ri-book-3-line', subjects: ['Physics', 'Chemistry', 'Biology', 'Math'] },
              { grade: 'Class 10th', icon: 'ri-flask-line', subjects: ['Physics', 'Chemistry', 'Biology', 'Math'] },
              { grade: 'Class 11th', icon: 'ri-microscope-line', subjects: ['Pre-Med', 'Pre-Eng', 'CS', 'Commerce'] },
              { grade: 'Class 12th', icon: 'ri-global-line', subjects: ['Pre-Med', 'Pre-Eng', 'CS', 'Commerce'] },
            ].map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group card-base card-hover p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                    <i className={`${classItem.icon} text-2xl`} />
                  </div>
                  <h3 className="text-xl font-bold mb-5 text-imcc-navy dark:text-white">{classItem.grade}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {classItem.subjects.map((subject, subIndex) => (
                      <span
                        key={subIndex}
                        className="bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-sky-500/10 group-hover:text-sky-600 transition-colors"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/registration"
                    className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 font-bold text-sm text-imcc-navy dark:text-white hover:bg-imcc-navy dark:hover:bg-sky-500 hover:text-white hover:border-imcc-navy dark:hover:border-sky-500 transition-all duration-300"
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
      <section className="section-padding bg-white dark:bg-imcc-navy relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-heading-badge">Why Choose Us</div>
            <h2 className="section-heading">
              The I M Collegiate <span className="text-sky-500">Advantage</span>
            </h2>
            <p className="section-subtext">We combine traditional values with modern methodologies to provide an unmatched learning environment.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-4xl bg-imcc-surface dark:bg-white/5 border border-transparent hover:border-sky-500/20 hover:bg-white dark:hover:bg-white/10 hover:shadow-card-hover transition-all duration-500"
              >
                <div className="w-14 h-14 bg-white dark:bg-white/10 rounded-2xl shadow-card flex items-center justify-center mb-6 text-sky-500 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-glow-sky transition-all duration-500">
                  <i className={`${feature.icon} text-2xl`} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-imcc-navy dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-imcc-surface dark:bg-imcc-navy/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-heading-badge">Testimonials</div>
            <h2 className="section-heading">
              Success Stories from <span className="text-sky-500">Our Students</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-base card-hover p-8 shadow-card"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-sky-500 rounded-lg flex items-center justify-center text-white">
                      <i className="ri-double-quotes-r text-xs" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-imcc-navy dark:text-white">{testimonial.name}</h4>
                    <p className="text-sky-600 dark:text-sky-400 text-sm font-medium">{testimonial.grade}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="mt-6 flex gap-1 text-sky-500">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-imcc-navy">
          <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-sky-500/10 rounded-full blur-3xl -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-imcc-blue/10 rounded-full blur-3xl -ml-40 -mb-40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-12 sm:p-16 rounded-6xl shadow-2xl"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Secure Your <span className="text-sky-400">Academic Future?</span>
            </h2>
            <p className="text-lg text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Admission for the new session is now open. Join Karachi's premier coaching centre and start your journey towards excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registration"
                className="px-10 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-sky-500/20"
              >
                Start Registration
              </Link>
              <Link
                href="/contact"
                className="btn-outline"
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

Home.displayName = 'Home';

export default Home;
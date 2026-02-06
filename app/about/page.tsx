'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';
import Link from 'next/link';
// import sirAshrafPic from '../../images/sir_ashraf.jpg';
// import sirAhtishamPic from '../../images/sir_ahtisham.jpg';
// import sirArifPic from '../../images/sir_arif.jpg';
// import sirKazimPic from '../../images/sir_kazim.jpg';
// import sirMoizPic from '../../images/sir_moiz.jpg';
// import sirAslamPic from '../../images/sir_aslam.jpg';
// import sirAzanPic from '../../images/sir_azan.jpg';
// import logo from '../../images/logo.jpg';

export default function About() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of education and student development.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Care',
      description: 'We genuinely care about each student\'s academic and personal growth.'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Success',
      description: 'We are committed to helping every student achieve their academic goals.'
    },
    {
      icon: 'ri-team-line',
      title: 'Unity',
      description: 'We believe in the power of teamwork between teachers, students, and parents.'
    }
  ];

  const teachers = [
    {
      name: 'Sir Ashraf',
      subject: 'Chemistry & Accounting',
      qualification: 'PhD Chemistry, 15 years experience',
      image: "/images/sir_ashraf.jpg"
    },
    {
      name: 'Sir Arif',
      subject: 'Mathematics  ',
      qualification: 'M.Phil Electronics Engineering, 8 years experience',
      image: "/images/sir_arif.JPG"
    },
    {
      name: 'Sir Aslam',
      subject: 'Urdu & pakistan Studies',
      qualification: 'M.Phil Urdu, 6 years experience',
      image: "/images/sir_aslam.jpg"
    },
    {
      name: 'Sir Ahtisham',
      subject: 'Physics ',
      qualification: 'M.Phil Physics, 4 years experience',
      image: "/images/sir_ahtisham.jpg"
    },
    {
      name: 'Sir Kazim',
      subject: 'Biology',
      qualification: 'BS Pharmacy, 4 years experience',
      image: "/images/sir_kazim.jpg"
    },
    {
      name: 'Sir Moiz',
      subject: 'English',
      qualification: 'BS English, 4 years experience',
      image: "/images/sir_moiz.jpg"
    },
    {
      name: 'Sir Azan',
      subject: 'Computer Science',
      qualification: 'BS Computer Science, 2 years experience',
      image: "/images/sir_azan.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-imcc-navy transition-colors duration-300">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden bg-imcc-navy">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-imcc-navy via-imcc-navy to-blue-950 opacity-90" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 font-bold text-sm tracking-wider uppercase mb-8">
              Since 2004
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Our Journey of <span className="text-sky-400">Excellence</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Empowering students with quality education and modern teaching methods in the heart of Karachi for over two decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32 bg-white dark:bg-imcc-navy relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group p-12 rounded-[3rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                <i className="ri-flag-2-line text-3xl" />
              </div>
              <h2 className="text-4xl font-bold mb-8 text-imcc-navy dark:text-white">Our Mission</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  To provide comprehensive and quality education to students from Class 9th to 12th, preparing them for success in their academic journey and future careers.
                </p>
                <p>
                  We believe in nurturing young minds through innovative teaching methods, personalized attention, and a supportive learning environment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group p-12 rounded-[3rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                <i className="ri-eye-line text-3xl" />
              </div>
              <h2 className="text-4xl font-bold mb-8 text-imcc-navy dark:text-white">Our Vision</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  To be the leading coaching center in Karachi, known for academic excellence, character development, and producing successful graduates.
                </p>
                <p>
                  We envision a future where every student achieves their academic goals and becomes a confident, skilled, and responsible citizen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-imcc-navy/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-sm tracking-wider uppercase mb-6">
              Our Foundations
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-imcc-navy dark:text-white">
              The Principles That <span className="text-sky-500">Guide Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 hover:border-sky-500/20 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-8 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-lg">
                  <i className={`${value.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-imcc-navy dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Faculty */}
      <section className="py-24 sm:py-32 bg-white dark:bg-imcc-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-sm tracking-wider uppercase mb-6">
              Elite Faculty
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-imcc-navy dark:text-white">
              Learn from the <span className="text-sky-500">Best</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-white/5 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/10"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-imcc-navy via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-imcc-navy dark:text-white group-hover:text-sky-500 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-sky-600 dark:text-sky-400 font-bold text-sm uppercase tracking-wider mb-4">
                    {teacher.subject}
                  </p>
                  <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                    <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                      {teacher.qualification}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-imcc-navy relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { number: '15000+', label: 'Total Enrolled' },
              { number: '10+', label: 'Elite Teachers' },
              { number: '20+', label: 'Years Experience' },
              { number: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                  {stat.number}
                </div>
                <div className="text-sky-400 font-bold uppercase tracking-widest text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-imcc-navy/50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-imcc-navy dark:text-white mb-8">
              Become Part of Our <span className="text-sky-500">Success Story</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              We're more than just a coaching center; we're a community dedicated to your academic growth and future success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/registration"
                className="px-12 py-5 bg-imcc-navy dark:bg-sky-500 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-sky-500/20"
              >
                Apply for Admission
              </Link>
              <Link
                href="/contact"
                className="px-12 py-5 bg-white dark:bg-white/5 text-imcc-navy dark:text-white border border-gray-200 dark:border-white/10 rounded-2xl font-bold text-xl transition-all duration-300"
              >
                Visit Campus
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
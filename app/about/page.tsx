'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  const values = [
    { icon: 'ri-lightbulb-line', title: 'Excellence', description: 'We strive for excellence in every aspect of education and student development.' },
    { icon: 'ri-heart-line', title: 'Care', description: "We genuinely care about each student's academic and personal growth." },
    { icon: 'ri-trophy-line', title: 'Success', description: 'We are committed to helping every student achieve their academic goals.' },
    { icon: 'ri-team-line', title: 'Unity', description: 'We believe in the power of teamwork between teachers, students, and parents.' },
  ];

  const teachers = [
    { name: 'Ashraf Hussain', subject: 'Chemistry & Accounting', qualification: 'M.Com, M.Phil Chemistry, 14 years experience', image: '/images/sir_ashraf.jpg' },
    { name: 'Arif Hussain', subject: 'Mathematics', qualification: 'BE Electronics Engineering, M.Phil Applied Mathematics, 12 years experience', image: '/images/sir_arif.JPG' },
    { name: 'Aslam Baig', subject: 'Urdu & Pakistan Studies', qualification: 'M.Phil Urdu, 6 years experience', image: '/images/sir_aslam.jpg' },
    { name: 'Ahtisham Ali', subject: 'Physics', qualification: 'M.Phil Physics, 6 years experience', image: '/images/sir_ahtisham.jpg' },
    { name: 'Muhammad Kazim', subject: 'Biology', qualification: 'Doctor of Pharmacy, 4 years experience', image: '/images/sir_kazim.jpg' },
    { name: 'Moiz Hussain', subject: 'English', qualification: 'BS English, 4 years experience', image: '/images/sir_moiz.jpg' },
    { name: 'Muhammad Azan', subject: 'Computer Science', qualification: 'BS Computer Science, 2 years experience', image: '/images/sir_azan.jpg' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-imcc-navy transition-colors duration-300">
      {/* Hero Section */}
      <section className="hero-navy min-h-[65vh]">
        <div className="hero-gradient-bg" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-imcc-blue/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="section-heading-badge border border-sky-500/20 mb-8">Since 2004</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our Journey of <span className="text-sky-400">Excellence</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Empowering students with quality education and modern teaching methods in the heart of Karachi for over two decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-imcc-navy relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: 'ri-flag-2-line', title: 'Our Mission', paragraphs: ['To provide comprehensive and quality education to students from Class 9th to 12th, preparing them for success in their academic journey and future careers.', 'We believe in nurturing young minds through innovative teaching methods, personalized attention, and a supportive learning environment.'] },
              { icon: 'ri-eye-line', title: 'Our Vision', paragraphs: ['To be the leading coaching center in Karachi, known for academic excellence, character development, and producing successful graduates.', 'We envision a future where every student achieves their academic goals and becomes a confident, skilled, and responsible citizen.'] },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group card-base card-hover p-10 sm:p-12 shadow-card"
              >
                <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-8 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                  <i className={`${item.icon} text-2xl`} />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-imcc-navy dark:text-white">{item.title}</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-imcc-surface dark:bg-imcc-navy/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-heading-badge">Our Foundations</div>
            <h2 className="section-heading">The Principles That <span className="text-sky-500">Guide Us</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group card-base card-hover p-8 shadow-card"
              >
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-card">
                  <i className={`${value.icon} text-xl`} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-imcc-navy dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Faculty */}
      <section className="section-padding bg-white dark:bg-imcc-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-heading-badge">Elite Faculty</div>
            <h2 className="section-heading">Learn from the <span className="text-sky-500">Best</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group card-base overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-imcc-navy/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 text-imcc-navy dark:text-white group-hover:text-sky-500 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-sky-600 dark:text-sky-400 font-bold text-xs uppercase tracking-wider mb-3">{teacher.subject}</p>
                  <div className="pt-3 border-t border-gray-100 dark:border-white/10">
                    <p className="text-gray-500 dark:text-gray-400 text-xs italic">{teacher.qualification}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-imcc-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '15000+', label: 'Total Enrolled' },
              { number: '10+', label: 'Elite Teachers' },
              { number: '20+', label: 'Years Experience' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-sky-400 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-imcc-surface dark:bg-imcc-navy/50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-heading">Become Part of Our <span className="text-sky-500">Success Story</span></h2>
            <p className="section-subtext mb-10">
              We're more than just a coaching center; we're a community dedicated to your academic growth and future success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registration" className="btn-primary inline-flex items-center justify-center gap-2">
                Apply for Admission
                <i className="ri-arrow-right-line" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white dark:bg-white/5 text-imcc-navy dark:text-white border border-gray-200 dark:border-white/10 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2">
                Visit Campus
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
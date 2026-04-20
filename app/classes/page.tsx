'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { memo } from 'react';

const Classes = memo(() => {
  const classes = [
    { grade: 'Class 9th (Science Group)', subjects: ['English', 'Urdu', 'Islamiat', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'], description: 'Build a strong foundation for your academic journey with comprehensive coverage of all subjects.', image: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20grade%209%20classroom%20studying%20mathematics%20and%20science%2C%20modern%20educational%20setting%2C%20bright%20classroom%20environment%2C%20students%20with%20books%20and%20notebooks&width=400&height=300&seq=class9&orientation=landscape', price: 'PKR 2,200/month', duration: '2.5 hours daily' },
    { grade: 'Class 10th (Science Group)', subjects: ['English', 'Urdu', 'Pakistan Studies', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'], description: 'Prepare for your matriculation exams with intensive practice and expert guidance.', image: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20grade%2010%20classroom%20taking%20exam%20preparation%2C%20focused%20study%20environment%2C%20modern%20educational%20setting%2C%20students%20with%20textbooks&width=400&height=300&seq=class10&orientation=landscape', price: 'PKR 2,200/month', duration: '2.5 hours daily' },
    { grade: 'Class 11th Pre-Medical', subjects: ['English', 'Urdu', 'Physics', 'Chemistry', 'Biology'], description: 'Specialized coaching for medical entrance exams with focus on MDCAT preparation.', image: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20biology%20and%20chemistry%20in%20modern%20laboratory%20setting%2C%20medical%20books%20and%20equipment%2C%20bright%20educational%20environment&width=400&height=300&seq=premedical&orientation=landscape', price: 'PKR 2,500/month', duration: '3 hours daily' },
    { grade: 'Class 11th Pre-Engineering/CS', subjects: ['English', 'Urdu', 'Physics', 'Chemistry', 'Mathematics', 'Computer Science'], description: 'Engineering and CS-focused curriculum with emphasis on problem-solving and technical skills.', image: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20mathematics%20and%20physics%20in%20modern%20classroom%2C%20engineering%20books%20and%20calculators%2C%20bright%20educational%20environment&width=400&height=300&seq=preengineering&orientation=landscape', price: 'PKR 2,500/month', duration: '3 hours daily' },
    { grade: 'Class 11th Commerce', subjects: ['English', 'Urdu', 'Accounting', 'Economics', 'Commerce', 'Business Math'], description: 'Comprehensive business education with practical applications and real-world examples.', image: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20commerce%20and%20business%20studies%20in%20modern%20classroom%2C%20business%20books%20and%20calculators%2C%20bright%20educational%20environment&width=400&height=300&seq=commerce&orientation=landscape', price: 'PKR 2,500/month', duration: '3 hours daily' },
    { grade: 'Class 12th Pre-Medical', subjects: ['English', 'Urdu', 'Physics', 'Chemistry', 'Biology'], description: 'Final year preparation with intensive MDCAT coaching and board exam focus.', image: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20grade%2012%20medical%20preparation%20class%2C%20intensive%20study%20session%2C%20modern%20laboratory%20setting%2C%20medical%20textbooks&width=400&height=300&seq=class12med&orientation=landscape', price: 'PKR 2,500/month', duration: '3 hours daily' },
    { grade: 'Class 12th Pre-Engineering/CS', subjects: ['English', 'Urdu', 'Physics', 'Chemistry', 'Mathematics', 'Computer Science'], description: 'Advanced engineering and CS preparation for board exams and entrance tests.', image: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20grade%2012%20engineering%20preparation%20class%2C%20advanced%20mathematics%20and%20physics%2C%20modern%20classroom%20setting%2C%20engineering%20books&width=400&height=300&seq=class12eng&orientation=landscape', price: 'PKR 2,500/month', duration: '3 hours daily' },
    { grade: 'Class 12th Commerce', subjects: ['English', 'Urdu', 'Accounting', 'Economics', 'Banking', 'Commercial Geography'], description: 'Advanced business education focusing on board exams and professional skills.', image: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20commerce%20and%20business%20studies%20in%20modern%20classroom%2C%20business%20books%20and%20calculators%2C%20bright%20educational%20environment&width=400&height=300&seq=commerce12&orientation=landscape', price: 'PKR 2,500/month', duration: '3 hours daily' },
  ];

  const features = [
    { icon: 'ri-user-star-line', title: 'Expert Teachers', description: 'Highly qualified and experienced faculty members with proven track records' },
    { icon: 'ri-book-open-line', title: 'Comprehensive Curriculum', description: 'Complete syllabus coverage with regular assessments and progress tracking' },
    { icon: 'ri-group-line', title: 'Small Batch Size', description: 'Limited students per class ensuring personalized attention for everyone' },
    { icon: 'ri-time-line', title: 'Flexible Timings', description: 'Multiple time slots available to suit different student schedules' },
    { icon: 'ri-award-line', title: 'Proven Results', description: 'Consistent high success rates in board exams and entrance tests' },
    { icon: 'ri-question-answer-line', title: 'Doubt Resolution', description: 'Dedicated time and support for clearing all your academic doubts' },
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

        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-heading-badge border border-sky-500/20 mb-8">Academic Programs</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Explore Our <span className="text-sky-400">Classes</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive educational programs for Class 9th to 12th, aligned with Karachi Board syllabus
            </p>
          </motion.div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="section-padding bg-imcc-surface dark:bg-imcc-navy/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Choose Your Path</h2>
            <p className="section-subtext">Select the perfect program for your academic journey</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group card-base card-hover overflow-hidden shadow-card"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.grade}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 right-3 bg-imcc-navy/90 backdrop-blur-sm text-white px-3 py-1 rounded-xl text-xs font-bold shadow-lg">
                    {classItem.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-imcc-navy dark:text-white">{classItem.grade}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{classItem.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {classItem.subjects.map((subject, subIndex) => (
                        <span key={subIndex} className="bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 px-2.5 py-0.5 rounded-lg text-xs font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <i className="ri-time-line" />
                      {classItem.duration}
                    </span>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/registration"
                      className="w-full block text-center bg-imcc-navy dark:bg-sky-500 text-white py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg"
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
      <section className="section-padding bg-white dark:bg-imcc-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-heading-badge">Our Edge</div>
            <h2 className="section-heading">What Makes Our Classes Special?</h2>
            <p className="section-subtext">Features that set us apart from other coaching centers</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group text-center card-base card-hover p-8 shadow-card"
              >
                <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                  <i className={`${feature.icon} text-2xl`} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-imcc-navy dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-imcc-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-imcc-blue/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
              Join our comprehensive coaching programs and unlock your full academic potential with expert guidance.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/registration"
                className="inline-flex items-center gap-2 bg-white text-imcc-navy px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl"
              >
                Enroll Today
                <i className="ri-arrow-right-line" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

Classes.displayName = 'Classes';

export default Classes;
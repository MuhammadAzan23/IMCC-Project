'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      image: "/images/sir_arif.jpg"
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
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10"></div>
    
          {/* Background Image */}
          <img
            src={'/images/logo.jpg'}
            alt="IMCC Logo"
            className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm"
            aria-hidden="true"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
             <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight"
                style={{ color: '#001f4d' }}
              >
                About I M Collegiate Coaching Centre
              </motion.h1> <br />
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Empowering students with quality education and modern teaching methods since our establishment in Karachi.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#001f4d' }}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide comprehensive and quality education to students from Class 9th to 12th, preparing them for success in their academic journey and future careers.
              </p>
              <p className="text-lg text-gray-600">
                We believe in nurturing young minds through innovative teaching methods, personalized attention, and a supportive learning environment that encourages excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#001f4d' }}>
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading coaching center in Karachi, known for academic excellence, character development, and producing successful graduates who contribute positively to society.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where every student who joins our institution achieves their academic goals and becomes a confident, skilled, and responsible citizen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#001f4d' }}>
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ backgroundColor: '#001f4d' }}>
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#001f4d' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#001f4d' }}>
              Meet Our Expert Faculty
            </h2>
            <p className="text-xl text-gray-600">
              Experienced educators dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#001f4d' }}>
                    {teacher.name}
                  </h3>
                  <p className="text-sky-600 font-medium mb-2">
                    {teacher.subject}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {teacher.qualification}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#001f4d' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-sky-900/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15000+', label: 'Students Enrolled' },
              { number: '10+', label: 'Expert Teachers' },
              { number: '15+', label: 'Years of Excellence' },
              { number: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-white"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#001f4d' }}>
              Ready to Join Our Family?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Become part of I M Collegiate's success story and achieve your academic dreams with our expert guidance.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/registration"
                className="inline-block text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl whitespace-nowrap"
                style={{ backgroundColor: '#001f4d' }}
              >
                Register Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
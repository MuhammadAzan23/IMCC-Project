
'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/ui/AnimatedText';
import GlowText from '@/components/ui/GlowText';
import ScrollingText from '@/components/ui/ScrollingText';
import Link from 'next/link';

export default function Home() {
  const classCategories = [
    'Class 9th • Class 10th • Class 11th • Class 12th',
    'Pre-Medical • Pre-Engineering • Commerce • Arts',
    'Expert Teachers • Modern Facilities • Proven Results'
  ];

  const features = [
    {
      icon: 'ri-book-open-line',
      title: 'Expert Faculty',
      description: 'Highly qualified teachers with years of experience in their respective fields.'
    },
    {
      icon: 'ri-award-line',
      title: 'Proven Results',
      description: 'Consistent track record of excellent results in board exams and entrance tests.'
    },
    {
      icon: 'ri-group-line',
      title: 'Small Batches',
      description: 'Limited students per batch to ensure personalized attention and better learning.'
    },
    {
      icon: 'ri-time-line',
      title: 'Flexible Timings',
      description: 'Multiple time slots available to accommodate different student schedules.'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      grade: 'Class 12th Pre-Medical',
      text: 'I M Collegiate helped me achieve 95% in my intermediate exams. The teachers are amazing!',
      image: 'https://readdy.ai/api/search-image?query=Pakistani%20male%20student%20smiling%20confidently%20in%20school%20uniform%20with%20books%2C%20clean%20studio%20background%2C%20professional%20portrait%20style&width=100&height=100&seq=student1&orientation=squarish'
    },
    {
      name: 'Fatima Khan',
      grade: 'Class 11th Pre-Engineering',
      text: 'The coaching methods are excellent. I improved my physics and mathematics significantly.',
      image: 'https://readdy.ai/api/search-image?query=Pakistani%20female%20student%20smiling%20confidently%20wearing%20hijab%20with%20books%2C%20clean%20studio%20background%2C%20professional%20portrait%20style&width=100&height=100&seq=student2&orientation=squarish'
    },
    {
      name: 'Ali Raza',
      grade: 'Class 10th',
      text: 'Great environment for learning. The teachers explain complex topics in simple ways.',
      image: 'https://readdy.ai/api/search-image?query=Pakistani%20teenage%20boy%20student%20smiling%20with%20school%20bag%2C%20clean%20studio%20background%2C%20professional%20portrait%20style&width=100&height=100&seq=student3&orientation=squarish'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{ color: '#001f4d' }}>
                Welcome to<br />
                <span className="text-4xl md:text-5xl">I M Collegiate</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#001f4d' }}>
                Coaching Centre
              </h2>
              <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-gray-600 font-medium mt-6">
                <i className="ri-map-pin-line text-2xl" style={{ color: '#001f4d' }}></i>
                <span>Karachi, Pakistan</span>
              </div>
            </motion.div>
          </motion.div>

          <GlowText text="Learn it. Live it. Pass it on." className="mb-12" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center"
          >
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/classes"
                className="inline-block border-2 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:shadow-lg whitespace-nowrap"
                style={{ borderColor: '#001f4d', color: '#001f4d' }}
              >
                View Classes
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-8 flex items-center justify-center" style={{ color: '#001f4d' }}>
            <i className="ri-arrow-down-line text-3xl"></i>
          </div>
        </motion.div>
      </section>

      {/* Scrolling Text Section */}
      <section className="py-16 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="container mx-auto px-4">
          <ScrollingText items={classCategories} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-3xl p-8 shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20Pakistani%20educational%20classroom%20with%20students%20studying%2C%20bright%20natural%20lighting%2C%20clean%20minimalist%20design%2C%20navy%20blue%20and%20white%20color%20scheme%2C%20inspiring%20academic%20environment%20with%20books%20and%20learning%20materials&width=600&height=400&seq=about1&orientation=landscape"
                  alt="About I M Collegiate"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#001f4d' }}>
                About I M Collegiate
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We provide comprehensive education with modern teaching methods and experienced faculty for students from Class 9th to 12th, including all streams of Intermediate education.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to empower students with quality education, preparing them for success in their academic journey and future careers through innovative teaching and personalized attention.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="inline-block text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl whitespace-nowrap"
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#001f4d' }}>
              Our Classes
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive education programs for all academic levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { grade: 'Class 9th', subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'English'] },
              { grade: 'Class 10th', subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'English'] },
              { grade: 'Class 11th', subjects: ['Pre-Medical', 'Pre-Engineering', 'Commerce', 'Arts'] },
              { grade: 'Class 12th', subjects: ['Pre-Medical', 'Pre-Engineering', 'Commerce', 'Arts'] }
            ].map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ backgroundColor: '#001f4d' }}>
                  <i className="ri-book-open-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#001f4d' }}>
                  {classItem.grade}
                </h3>
                <div className="space-y-2 mb-6">
                  {classItem.subjects.map((subject, subIndex) => (
                    <div key={subIndex} className="bg-sky-50 text-sky-800 px-3 py-1 rounded-full text-sm text-center">
                      {subject}
                    </div>
                  ))}
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/registration"
                    className="w-full block text-center text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#001f4d' }}>
              Why Choose I M Collegiate?
            </h2>
            <p className="text-xl text-gray-600">
              We provide comprehensive education with modern teaching methods and experienced faculty.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ backgroundColor: '#001f4d' }}>
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#001f4d' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#001f4d' }}>
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from our brilliant students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: '#001f4d' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sky-600 text-sm">
                      {testimonial.grade}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#001f4d' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-sky-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their dreams with I M Collegiate Coaching Centre.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/registration"
                className="inline-block bg-white text-blue-950 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl whitespace-nowrap"
              >
                Enroll Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

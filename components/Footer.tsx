
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#001f4d' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://static.readdy.ai/image/9cee6152417353324a92f1cb4d6ac32b/db04df6d67b5c209517963537a24bf52.png"
                alt="I M Collegiate Coaching Centre"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">I M Collegiate Coaching Centre</h3>
                <p className="text-blue-200">Karachi, Pakistan</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              Empowering students from Class 9th to 12th with quality education in Pre-Medical, Pre-Engineering, Commerce, and Arts. Learn it. Live it. Pass it on.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-12 h-12 flex items-center justify-center bg-sky-600 hover:bg-sky-700 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ri-facebook-fill text-xl"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 flex items-center justify-center bg-sky-600 hover:bg-sky-700 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ri-instagram-line text-xl"></i>
              </motion.a>
              <motion.a 
                href="https://wa.me/923001234567" 
                className="w-12 h-12 flex items-center justify-center bg-green-600 hover:bg-green-700 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ri-whatsapp-line text-xl"></i>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-blue-200 hover:text-white transition-colors duration-200">Home</Link>
              <Link href="/about" className="block text-blue-200 hover:text-white transition-colors duration-200">About Us</Link>
              <Link href="/classes" className="block text-blue-200 hover:text-white transition-colors duration-200">Classes</Link>
              <Link href="/registration" className="block text-blue-200 hover:text-white transition-colors duration-200">Register</Link>
              <Link href="/contact" className="block text-blue-200 hover:text-white transition-colors duration-200">Contact</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <i className="ri-map-pin-line text-sky-400"></i>
                </div>
                <div>
                  <p className="text-blue-200">I M Collegiate Coaching Centre</p>
                  <p className="text-blue-200">Karachi, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-phone-line text-sky-400"></i>
                </div>
                <div>
                  <p className="text-blue-200">+92 300 1234567</p>
                  <p className="text-blue-200">+92 21 1234567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-mail-line text-sky-400"></i>
                </div>
                <span className="text-blue-200">info@imcollegiate.edu.pk</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <i className="ri-time-line text-sky-400"></i>
                </div>
                <div>
                  <p className="text-blue-200">Mon - Th:  4:00 PM-9:30 PM</p>
                  <p className="text-blue-200">Sat - Sun: 4:00 PM-9:30 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-200">
            &copy; 2025 I M Collegiate Coaching Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

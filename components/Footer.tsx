
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-imcc-navy text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl -mr-48 -mt-48" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-white rounded-2xl p-2 shadow-xl shadow-sky-500/10">
                <img
                  src="https://static.readdy.ai/image/9cee6152417353324a92f1cb4d6ac32b/db04df6d67b5c209517963537a24bf52.png"
                  alt="I M Collegiate Coaching Centre"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">I M Collegiate</h3>
                <p className="text-sky-400 font-medium">Empowering Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Empowering students from Class 9th to 12th with quality education in Pre-Medical, Pre-Engineering, Computer Science, and Commerce.
              <span className="block mt-2 italic text-sky-400/80">"Learn it. Live it. Pass it on."</span>
            </p>
            <div className="flex space-x-5">
              {[
                { icon: 'ri-facebook-fill', href: 'https://www.facebook.com/IMCCkhiOfficial', color: 'hover:bg-blue-600' },
                { icon: 'ri-instagram-line', href: '#', color: 'hover:bg-pink-600' },
                { icon: 'ri-whatsapp-line', href: 'https://wa.me/923472230321', color: 'hover:bg-green-600' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-sky-500 rounded-full" />
            </h4>
            <div className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Classes', href: '/classes' },
                { name: 'Register Now', href: '/registration' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="block text-gray-400 hover:text-sky-400 hover:translate-x-2 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-sky-500 rounded-full" />
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-sky-500/10 rounded-lg text-sky-400">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold text-white">Main Branch</p>
                  <p>I M Collegiate, Karachi</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-sky-500/10 rounded-lg text-sky-400">
                  <i className="ri-phone-line text-xl"></i>
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold text-white">Call Us</p>
                  <p>+92 347 2230321</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-sky-500/10 rounded-lg text-sky-400">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold text-white">Email Us</p>
                  <p className="break-all">info@imcollegiate.edu.pk</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} I M Collegiate Coaching Centre. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-imcc-navy text-white relative overflow-hidden">
      {/* Top gradient accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-imcc-blue/5 rounded-full blur-3xl -ml-20 -mb-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl p-1.5 shadow-lg shadow-sky-500/10">
                <img
                  src="https://static.readdy.ai/image/9cee6152417353324a92f1cb4d6ac32b/db04df6d67b5c209517963537a24bf52.png"
                  alt="I M Collegiate Coaching Centre"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">I M Collegiate</h3>
                <p className="text-sky-400 font-medium text-sm">Coaching Centre</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Empowering students from Class 9th to 12th with quality education since 2004.
            </p>
            <p className="text-sky-400/70 italic text-sm mb-8">"Learn it. Live it. Pass it on."</p>
            <div className="flex gap-3">
              {[
                { icon: 'ri-facebook-fill', href: 'https://www.facebook.com/IMCCkhiOfficial', hoverBg: 'hover:bg-blue-600' },
                { icon: 'ri-instagram-line', href: '#', hoverBg: 'hover:bg-pink-600' },
                { icon: 'ri-whatsapp-line', href: 'https://wa.me/923472230321', hoverBg: 'hover:bg-green-600' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-transparent ${social.hoverBg}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`${social.icon} text-lg`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-sky-500 rounded-full" />
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Classes', href: '/classes' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Register Now', href: '/registration' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-sky-400 hover:translate-x-1 transition-all duration-300 text-sm group"
                >
                  <i className="ri-arrow-right-s-line text-sky-500/40 group-hover:text-sky-400 transition-colors text-xs" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Programs
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-sky-500 rounded-full" />
            </h4>
            <div className="space-y-3">
              {['Class 9th Science', 'Class 10th Science', 'Pre-Medical', 'Pre-Engineering', 'Computer Science', 'Commerce'].map((program, idx) => (
                <p key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500/40" />
                  {program}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-sky-500 rounded-full" />
            </h4>
            <div className="space-y-5">
              {[
                { icon: 'ri-map-pin-line', label: 'Main Branch', value: 'I M Collegiate, Karachi' },
                { icon: 'ri-phone-line', label: 'Call Us', value: '+92 347 2230321' },
                { icon: 'ri-mail-line', label: 'Email Us', value: 'info@imcollegiate.edu.pk' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-sky-500/10 rounded-lg text-sky-400 mt-0.5">
                    <i className={`${item.icon} text-lg`} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{item.label}</p>
                    <p className="text-gray-400 text-sm break-all">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} I M Collegiate Coaching Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-sky-400 transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-sky-400 transition-colors duration-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

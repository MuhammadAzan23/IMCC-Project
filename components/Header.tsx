'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Classes', href: '/classes' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Register', href: '/registration' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{ backgroundColor: isScrolled ? (isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)') : '#001f4d' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          <Link href="/" className="flex items-center space-x-3">
            <motion.img
              src="https://static.readdy.ai/image/9cee6152417353324a92f1cb4d6ac32b/db04df6d67b5c209517963537a24bf52.png"
              alt="I M Collegiate Coaching Centre"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? 'w-10 h-10' : 'w-14 h-14'
              }`}
              whileHover={{ scale: 1.05 }}
            />
            <div className="hidden md:block">
              <h1 className={`font-bold transition-all duration-300 ${
                isScrolled ? 'text-base' : 'text-lg'
              }`} style={{ color: isScrolled ? (isDarkMode ? '#ffffff' : '#001f4d') : 'white' }}>
                I M Collegiate
              </h1>
              <p className={`text-sm transition-all duration-300 ${
                isScrolled ? (isDarkMode ? 'text-gray-300' : 'text-gray-600') : 'text-blue-200'
              }`}>
                Coaching Centre
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className={`font-medium transition-all duration-300 relative group ${
                    isScrolled 
                      ? (isDarkMode ? 'text-gray-300 hover:text-sky-400' : 'text-gray-700 hover:text-sky-600')
                      : 'text-white hover:text-sky-200'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? (isDarkMode ? 'bg-sky-400' : 'bg-sky-600') : 'bg-sky-200'
                  }`}></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? (isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200')
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {isDarkMode ? (
                  <i className="ri-sun-line text-yellow-400"></i>
                ) : (
                  <i className={`ri-moon-line ${isScrolled ? (isDarkMode ? 'text-gray-300' : 'text-gray-700') : 'text-white'}`}></i>
                )}
              </div>
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/registration"
                className={`hidden md:block px-6 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  isScrolled 
                    ? (isDarkMode ? 'bg-sky-600 hover:bg-sky-700 text-white' : 'bg-sky-600 hover:bg-sky-700 text-white')
                    : 'bg-white text-blue-950 hover:bg-blue-50'
                }`}
              >
                Register Now
              </Link>
            </motion.div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? (isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')
                  : 'hover:bg-white/20'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line ${
                  isScrolled ? (isDarkMode ? 'text-gray-300' : 'text-gray-700') : 'text-white'
                }`}></i>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden border-t rounded-b-lg shadow-lg ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-3 rounded-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-sky-400 hover:bg-gray-700' 
                      : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/registration"
                className="block w-full text-center text-white py-3 rounded-lg transition-all duration-300 font-semibold whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
                style={{ backgroundColor: '#001f4d' }}
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
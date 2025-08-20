'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { memo } from 'react';

// TypeScript interface for navigation items
interface NavItem {
  name: string;
  href: string;
}

// Navigation items
const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Classes', href: '/classes' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Result', href: '/result' },
  { name: 'Contact', href: '/contact' },
];

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll with debounce
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const debouncedScroll = () => {
      let timeoutId: NodeJS.Timeout;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(handleScroll, 100);
      };
    };
    window.addEventListener('scroll', debouncedScroll());
    return () => window.removeEventListener('scroll', debouncedScroll());
  }, [handleScroll]);

  // Initialize dark mode based on system preference or local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const newDarkMode = !prev;
      document.documentElement.classList.toggle('dark', newDarkMode);
      localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
      return newDarkMode;
    });
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled
          ? isDarkMode
            ? 'rgba(17, 24, 39, 0.95)'
            : 'rgba(255, 255, 255, 0.95)'
          : '#001f4d',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}
        >
          {/* Logo */}
          <Link href="/" aria-label="I M Collegiate Coaching Centre Home">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="https://static.readdy.ai/image/9cee6152417353324a92f1cb4d6ac32b/db04df6d67b5c209517963537a24bf52.png"
                alt="I M Collegiate Logo"
                width={isScrolled ? 40 : 48}
                height={isScrolled ? 40 : 48}
                className={`object-contain transition-all duration-300 rounded-full ${
                  isScrolled ? '' : 'border border-white/30'
                }`}
                onError={(e) => (e.currentTarget.src = '/logo-fallback.png')}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className={`font-medium transition-all duration-300 relative group ${
                    isScrolled
                      ? isDarkMode
                        ? 'text-gray-300 hover:text-sky-400'
                        : 'text-gray-700 hover:text-sky-600'
                      : 'text-white hover:text-sky-200'
                  }`}
                  aria-label={`Navigate to ${item.name} page`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled
                        ? isDarkMode
                          ? 'bg-sky-400'
                          : 'bg-sky-600'
                        : 'bg-sky-200'
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Actions (Dark Mode Toggle + Register + Mobile Menu) */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? isDarkMode
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-100 hover:bg-gray-200'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {isDarkMode ? (
                  <i className="ri-sun-line text-yellow-400" aria-hidden="true" />
                ) : (
                  <i
                    className={`ri-moon-line ${
                      isScrolled
                        ? isDarkMode
                          ? 'text-gray-300'
                          : 'text-gray-700'
                        : 'text-white'
                    }`}
                    aria-hidden="true"
                  />
                )}
              </div>
            </motion.button>

            {/* Register Button (Desktop) */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/registration"
                className={`hidden md:block px-6 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  isScrolled
                    ? isDarkMode
                      ? 'bg-sky-600 hover:bg-sky-700 text-white'
                      : 'bg-sky-600 hover:bg-sky-700 text-white'
                    : 'bg-white text-blue-950 hover:bg-blue-50'
                }`}
                aria-label="Register for classes at I M Collegiate"
              >
                Register Now
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? isDarkMode
                    ? 'hover:bg-gray-700'
                    : 'hover:bg-gray-100'
                  : 'hover:bg-white/20'
              }`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i
                  className={`ri-${isMenuOpen ? 'close' : 'menu'}-line ${
                    isScrolled
                      ? isDarkMode
                        ? 'text-gray-300'
                        : 'text-gray-700'
                      : 'text-white'
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t rounded-b-lg shadow-lg mt-2 ${
              isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}
            role="navigation"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-3 rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-sky-400 hover:bg-gray-700'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Navigate to ${item.name} page`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/registration"
                className="block w-full text-center text-white py-3 rounded-lg transition-all duration-300 font-semibold whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
                style={{ backgroundColor: '#001f4d' }}
                aria-label="Register for classes at I M Collegiate"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
});

export default Header;
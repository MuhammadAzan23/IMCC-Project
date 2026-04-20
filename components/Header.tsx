'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { memo } from 'react';

interface NavItem {
  name: string;
  href: string;
}

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
  const pathname = usePathname();

  // Handle scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const newDarkMode = !prev;
      document.documentElement.classList.toggle('dark', newDarkMode);
      localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
      return newDarkMode;
    });
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Determine header style based on scroll + dark mode
  const headerBg = isScrolled
    ? isDarkMode
      ? 'rgba(0, 31, 77, 0.92)'
      : 'rgba(255, 255, 255, 0.92)'
    : 'transparent';

  const headerBorder = isScrolled ? (isDarkMode ? 'border-white/5' : 'border-gray-200/50') : 'border-transparent';

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl border-b ${headerBorder}`}
        style={{ backgroundColor: headerBg }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="I M Collegiate Coaching Centre Home">
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <Image
                  src="https://static.readdy.ai/image/9cee6152417353324a92f1cb4d6ac32b/db04df6d67b5c209517963537a24bf52.png"
                  alt="I M Collegiate Logo"
                  width={isScrolled ? 38 : 44}
                  height={isScrolled ? 38 : 44}
                  className="object-contain transition-all duration-300 rounded-xl"
                  onError={(e) => (e.currentTarget.src = '/logo-fallback.png')}
                  priority
                />
              </motion.div>
              <span className={`hidden sm:block font-bold text-lg transition-all duration-300 ${
                isScrolled
                  ? isDarkMode ? 'text-white' : 'text-imcc-navy'
                  : 'text-white'
              }`}>
                IMCC
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                    isActive(item.href)
                      ? isScrolled
                        ? isDarkMode
                          ? 'text-sky-400 bg-sky-500/10'
                          : 'text-sky-600 bg-sky-500/10'
                        : 'text-white bg-white/15'
                      : isScrolled
                        ? isDarkMode
                          ? 'text-gray-300 hover:text-white hover:bg-white/5'
                          : 'text-gray-600 hover:text-imcc-navy hover:bg-gray-100/80'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label={`Navigate to ${item.name} page`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? isDarkMode
                      ? 'bg-white/10 hover:bg-white/15 text-sky-400'
                      : 'bg-gray-100 hover:bg-gray-200 text-imcc-navy'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <i className={`${isDarkMode ? 'ri-sun-line text-yellow-400' : 'ri-moon-line'} text-lg`} aria-hidden="true" />
              </motion.button>

              {/* Register Button (Desktop) */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/registration"
                  className={`hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isScrolled
                      ? isDarkMode
                        ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/20'
                        : 'bg-imcc-navy hover:bg-imcc-navy-light text-white shadow-lg shadow-imcc-navy/20'
                      : 'bg-white text-imcc-navy hover:bg-sky-50 shadow-xl'
                  }`}
                  aria-label="Register for classes"
                >
                  Register Now
                  <i className="ri-arrow-right-line text-sm" />
                </Link>
              </motion.div>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? isDarkMode
                      ? 'hover:bg-white/10 text-white'
                      : 'hover:bg-gray-100 text-imcc-navy'
                    : 'hover:bg-white/15 text-white'
                }`}
                whileTap={{ scale: 0.95 }}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`} aria-hidden="true" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 lg:hidden shadow-2xl ${
                isDarkMode ? 'bg-imcc-navy' : 'bg-white'
              }`}
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className={`p-2 rounded-xl transition-colors ${
                      isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-gray-600'
                    }`}
                    aria-label="Close menu"
                  >
                    <i className="ri-close-line text-2xl" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="space-y-1" role="navigation">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-300 ${
                          isActive(item.href)
                            ? isDarkMode
                              ? 'text-sky-400 bg-sky-500/10'
                              : 'text-sky-600 bg-sky-500/10'
                            : isDarkMode
                              ? 'text-gray-300 hover:text-white hover:bg-white/5'
                              : 'text-gray-600 hover:text-imcc-navy hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Register Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Link
                    href="/registration"
                    className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-sky-500 hover:bg-sky-400 text-white'
                        : 'bg-imcc-navy hover:bg-imcc-navy-light text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register Now
                    <i className="ri-arrow-right-line" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

Header.displayName = 'Header';

export default Header;
'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues with GSAP
const MasonryGallery = dynamic(() => import('@/components/ui/MasonryGallery'), { ssr: false });

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { id: 1, src: '/images/sir_ahtisham.jpg', alt: 'Sir Ahtisham — Faculty', category: 'faculty', height: 350 },
    { id: 2, src: '/images/sir_arif.JPG', alt: 'Sir Arif — Faculty', category: 'faculty', height: 280 },
    { id: 3, src: '/images/sir_ashraf.jpg', alt: 'Sir Ashraf — Faculty', category: 'faculty', height: 400 },
    { id: 4, src: '/images/sir_aslam.jpg', alt: 'Sir Aslam — Faculty', category: 'faculty', height: 450 },
    { id: 5, src: '/images/sir_azan.jpg', alt: 'Sir Azan — Faculty', category: 'faculty', height: 350 },
    { id: 6, src: '/images/sir_kazim.jpg', alt: 'Sir Kazim — Faculty', category: 'faculty', height: 300 },
    { id: 7, src: '/images/sir_moiz.jpg', alt: 'Sir Moiz — Faculty', category: 'faculty', height: 380 },
    { id: 8, src: '/images/logo.jpg', alt: 'IMCC — Our Identity', category: 'campus', height: 200 },
    { id: 9, src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20in%20modern%20classroom%20with%20teacher%20explaining%20on%20whiteboard%2C%20bright%20educational%20environment%2C%20students%20taking%20notes&width=600&height=400&seq=gallery1&orientation=landscape', alt: 'Classroom Session', category: 'classroom', height: 280 },
    { id: 10, src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20working%20on%20physics%20experiments%2C%20modern%20physics%20laboratory%2C%20students%20with%20scientific%20equipment&width=600&height=400&seq=gallery6&orientation=landscape', alt: 'Physics Lab', category: 'laboratory', height: 320 },
    { id: 11, src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20celebrating%20academic%20success%2C%20holding%20certificates%20and%20awards%2C%20happy%20graduation%20ceremony&width=600&height=400&seq=gallery4&orientation=landscape', alt: 'Achievement Ceremony', category: 'events', height: 280 },
    { id: 12, src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20chemistry%20lab%20conducting%20experiments%2C%20modern%20laboratory%20equipment%2C%20safety%20measures%20being%20followed&width=600&height=400&seq=gallery11&orientation=landscape', alt: 'Chemistry Lab', category: 'laboratory', height: 300 },
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: 'ri-gallery-line' },
    { id: 'faculty', name: 'Faculty', icon: 'ri-user-star-line' },
    { id: 'classroom', name: 'Classroom', icon: 'ri-book-open-line' },
    { id: 'laboratory', name: 'Laboratory', icon: 'ri-flask-line' },
    { id: 'events', name: 'Events', icon: 'ri-calendar-event-line' },
    { id: 'campus', name: 'Campus', icon: 'ri-building-line' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter((img) => img.category === filter);

  // Keyboard escape to close lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage, handleKeyDown]);

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

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="section-heading-badge border border-sky-500/20 mb-8">Visual Tour</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Explore Our <span className="text-sky-400">Gallery</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Explore our vibrant learning environment and student activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="section-padding bg-imcc-surface dark:bg-imcc-navy/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-imcc-navy dark:bg-sky-500 text-white shadow-lg'
                      : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10'
                  }`}
                >
                  <i className={`${category.icon} text-base`} />
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Masonry Gallery */}
          <MasonryGallery
            items={filteredImages}
            columns={3}
            gap={16}
            animateFrom="bottom"
            blurToFocus={true}
            stagger={0.08}
            scaleOnHover={true}
            hoverScale={0.96}
            colorShiftOnHover={true}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-imcc-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Want to Be Part of Our Story?
            </h2>
            <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
              Join our vibrant learning community and create your own success story at I M Collegiate.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="/registration"
                className="inline-flex items-center gap-2 bg-white text-imcc-navy px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl"
              >
                Join Us Today
                <i className="ri-arrow-right-line" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-xl text-white transition-colors duration-200"
                aria-label="Close lightbox"
              >
                <i className="ri-close-line text-xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
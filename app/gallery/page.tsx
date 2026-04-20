'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20in%20modern%20classroom%20with%20teacher%20explaining%20on%20whiteboard%2C%20bright%20educational%20environment%2C%20students%20taking%20notes&width=600&height=400&seq=gallery1&orientation=landscape', alt: 'Classroom Session', category: 'classroom' },
    { src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20taking%20exam%20in%20examination%20hall%2C%20focused%20study%20environment%2C%20students%20writing%20on%20answer%20sheets&width=600&height=400&seq=gallery3&orientation=landscape', alt: 'Examination Hall', category: 'exams' },
    { src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20celebrating%20academic%20success%2C%20holding%20certificates%20and%20awards%2C%20happy%20graduation%20ceremony&width=600&height=400&seq=gallery4&orientation=landscape', alt: 'Achievement Ceremony', category: 'events' },
    { src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20mathematics%20on%20whiteboard%2C%20teacher%20explaining%20complex%20equations%2C%20modern%20classroom%20setting&width=600&height=400&seq=gallery5&orientation=landscape', alt: 'Mathematics Class', category: 'classroom' },
    { src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20working%20on%20physics%20experiments%2C%20modern%20physics%20laboratory%2C%20students%20with%20scientific%20equipment&width=600&height=400&seq=gallery6&orientation=landscape', alt: 'Physics Lab', category: 'laboratory' },
    { src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20participating%20in%20academic%20competition%2C%20quiz%20contest%2C%20students%20raising%20hands%20to%20answer%20questions&width=600&height=400&seq=gallery7&orientation=landscape', alt: 'Academic Competition', category: 'events' },
    { src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20library%20studying%20together%2C%20modern%20library%20with%20books%20and%20computers%2C%20collaborative%20learning%20environment&width=600&height=400&seq=gallery8&orientation=landscape', alt: 'Library Study', category: 'classroom' },
    { src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20taking%20practice%20test%2C%20exam%20preparation%20session%2C%20students%20focused%20on%20answer%20sheets&width=600&height=400&seq=gallery9&orientation=landscape', alt: 'Practice Test', category: 'exams' },
    { src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20at%20graduation%20ceremony%2C%20wearing%20caps%20and%20gowns%2C%20celebrating%20academic%20achievement&width=600&height=400&seq=gallery10&orientation=landscape', alt: 'Graduation Day', category: 'events' },
    { src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20chemistry%20lab%20conducting%20experiments%2C%20modern%20laboratory%20equipment%2C%20safety%20measures%20being%20followed&width=600&height=400&seq=gallery11&orientation=landscape', alt: 'Chemistry Lab', category: 'laboratory' },
    { src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20presenting%20project%20work%2C%20modern%20classroom%20with%20projector%2C%20students%20giving%20presentation&width=600&height=400&seq=gallery12&orientation=landscape', alt: 'Project Presentation', category: 'classroom' },
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: 'ri-gallery-line' },
    { id: 'classroom', name: 'Classroom', icon: 'ri-book-open-line' },
    { id: 'exams', name: 'Examinations', icon: 'ri-file-list-3-line' },
    { id: 'events', name: 'Events', icon: 'ri-calendar-event-line' },
    { id: 'laboratory', name: 'Laboratory', icon: 'ri-flask-line' },
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

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer overflow-hidden card-base shadow-card hover:shadow-card-hover"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-imcc-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center rounded-4xl">
                    <div className="text-white text-center p-6">
                      <div className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl mx-auto mb-2">
                        <i className="ri-zoom-in-line text-xl" />
                      </div>
                      <p className="font-semibold text-sm">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
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
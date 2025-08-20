'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import logo from '../../images/logo.jpg'; // Ensure this path is correct
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const images = [
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20in%20modern%20classroom%20with%20teacher%20explaining%20on%20whiteboard%2C%20bright%20educational%20environment%2C%20students%20taking%20notes&width=600&height=400&seq=gallery1&orientation=landscape',
      alt: 'Classroom Session',
      category: 'classroom'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20conducting%20science%20experiment%20in%20modern%20laboratory%2C%20chemistry%20lab%20equipment%2C%20students%20wearing%20safety%20goggles&width=600&height=400&seq=gallery2&orientation=landscape',
      alt: 'Science Lab',
      category: 'laboratory'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20taking%20exam%20in%20examination%20hall%2C%20focused%20study%20environment%2C%20students%20writing%20on%20answer%20sheets&width=600&height=400&seq=gallery3&orientation=landscape',
      alt: 'Examination Hall',
      category: 'exams'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20celebrating%20academic%20success%2C%20holding%20certificates%20and%20awards%2C%20happy%20graduation%20ceremony&width=600&height=400&seq=gallery4&orientation=landscape',
      alt: 'Achievement Ceremony',
      category: 'events'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20mathematics%20on%20whiteboard%2C%20teacher%20explaining%20complex%20equations%2C%20modern%20classroom%20setting&width=600&height=400&seq=gallery5&orientation=landscape',
      alt: 'Mathematics Class',
      category: 'classroom'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20working%20on%20physics%20experiments%2C%20modern%20physics%20laboratory%2C%20students%20with%20scientific%20equipment&width=600&height=400&seq=gallery6&orientation=landscape',
      alt: 'Physics Lab',
      category: 'laboratory'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20participating%20in%20academic%20competition%2C%20quiz%20contest%2C%20students%20raising%20hands%20to%20answer%20questions&width=600&height=400&seq=gallery7&orientation=landscape',
      alt: 'Academic Competition',
      category: 'events'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20library%20studying%20together%2C%20modern%20library%20with%20books%20and%20computers%2C%20collaborative%20learning%20environment&width=600&height=400&seq=gallery8&orientation=landscape',
      alt: 'Library Study',
      category: 'classroom'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20taking%20practice%20test%2C%20exam%20preparation%20session%2C%20students%20focused%20on%20answer%20sheets&width=600&height=400&seq=gallery9&orientation=landscape',
      alt: 'Practice Test',
      category: 'exams'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20at%20graduation%20ceremony%2C%20wearing%20caps%20and%20gowns%2C%20celebrating%20academic%20achievement&width=600&height=400&seq=gallery10&orientation=landscape',
      alt: 'Graduation Day',
      category: 'events'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20in%20chemistry%20lab%20conducting%20experiments%2C%20modern%20laboratory%20equipment%2C%20safety%20measures%20being%20followed&width=600&height=400&seq=gallery11&orientation=landscape',
      alt: 'Chemistry Lab',
      category: 'laboratory'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Pakistani%20students%20presenting%20project%20work%2C%20modern%20classroom%20with%20projector%2C%20students%20giving%20presentation&width=600&height=400&seq=gallery12&orientation=landscape',
      alt: 'Project Presentation',
      category: 'classroom'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'classroom', name: 'Classroom' },
    { id: 'laboratory', name: 'Laboratory' },
    { id: 'exams', name: 'Examinations' },
    { id: 'events', name: 'Events' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10"></div>
        
          {/* Background Image */}
          <img
            src={logo.src}
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
              className="space-y-4 mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: '#001f4d' }}>
                Explore Our Gallery
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Explore our vibrant learning environment and student activities
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#001f4d' }}>
              Browse Categories
            </h2>
            <p className="text-xl text-gray-600">
              Filter photos by category
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap shadow-lg ${
                  filter === category.id
                    ? 'text-white shadow-xl'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
                style={filter === category.id ? { backgroundColor: '#001f4d' } : {}}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-w-16 aspect-h-12 h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="text-white text-center p-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-2">
                      <i className="ri-search-line text-2xl"></i>
                    </div>
                    <p className="font-semibold">{image.alt}</p>
                  </div>
                </div>
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
              Want to Be Part of Our Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our vibrant learning community and create your own success story at I M Collegiate.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/registration"
                className="inline-block bg-white text-blue-950 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl whitespace-nowrap"
              >
                Join Us Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-h-screen object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../data/galleryData';
import { FaTimes, FaHeart, FaStar } from 'react-icons/fa';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'All'
    ? galleryData.images
    : galleryData.images.filter(img => img.category === activeCategory);

  return (
    <div className="bg-[#f4f1ea] min-h-screen relative overflow-hidden font-sans" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23e5e0d8\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}>
      
      {/* Header */}
      <div className="pt-32 pb-10 text-center relative z-10">
        <motion.div
          initial={{ rotate: -5, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          className="inline-block bg-white p-4 pb-8 shadow-xl border border-gray-200 transform -rotate-2"
        >
          {/* Tape */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white/60 shadow-sm border border-gray-200 -rotate-3 z-20" style={{ backdropFilter: 'blur(2px)' }}></div>
          <h1 className="text-4xl md:text-5xl font-black text-[#F52F7A]" style={{ fontFamily: "'Baloo 2', cursive" }}>
            Memory Scrapbook
          </h1>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pb-20 relative z-10">
        {/* Filters - Sticky notes style */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {galleryData.categories.map((cat, idx) => {
            const colors = ['bg-[#FFD600]', 'bg-[#32C5FF]', 'bg-[#F52F7A]', 'bg-[#7AC943]', 'bg-[#9A5CE5]'];
            const rot = idx % 2 === 0 ? '-rotate-3' : 'rotate-2';
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2 shadow-md hover:scale-110 transition-transform ${rot} ${
                  activeCategory === cat ? `${colors[idx % colors.length]} text-white font-bold` : 'bg-white text-gray-700 font-medium'
                }`}
                style={{ fontFamily: "'Baloo 2', cursive", fontSize: '1.2rem' }}
              >
                {/* Pin */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                {cat}
              </button>
            )
          })}
        </div>

        {/* Scrapbook Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8">
          <AnimatePresence>
            {filteredImages.map((img, idx) => {
              const rotation = (idx % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 1);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  key={img.id}
                  className="mb-12 break-inside-avoid relative group cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                    className="bg-white p-3 pb-12 shadow-xl border border-gray-200 relative transform transition-transform"
                    style={{ rotate: `${rotation}deg` }}
                  >
                    {/* Washi Tape */}
                    <div className="absolute -top-3 left-4 w-20 h-6 bg-blue-100/80 shadow-sm -rotate-6 z-20 mix-blend-multiply" style={{ backdropFilter: 'blur(2px)' }}></div>
                    <div className="absolute -top-4 right-4 w-16 h-6 bg-pink-100/80 shadow-sm rotate-12 z-20 mix-blend-multiply" style={{ backdropFilter: 'blur(2px)' }}></div>
                    
                    {/* Doodle stickers */}
                    {idx % 3 === 0 && <FaStar className="absolute bottom-4 left-4 text-2xl text-[#FFD600] opacity-80" />}
                    {idx % 3 === 1 && <FaHeart className="absolute bottom-4 right-4 text-2xl text-[#F52F7A] opacity-80" />}

                    <img src={img.url} alt={img.title} className="w-full aspect-[4/3] object-cover" />
                    <div className="absolute bottom-2 left-0 w-full text-center">
                      <p className="text-xl text-gray-800 font-medium" style={{ fontFamily: "'Caveat', cursive, 'Comic Sans MS'" }}>
                        {img.title}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 p-4 flex items-center justify-center cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white text-3xl hover:text-[#FFD600] z-50">
              <FaTimes />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] bg-white p-4 pb-16 rounded-sm shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-auto max-h-[75vh] object-contain" />
              <div className="absolute bottom-4 left-0 w-full text-center">
                <p className="text-3xl text-gray-800" style={{ fontFamily: "'Caveat', cursive, 'Comic Sans MS'" }}>
                  {selectedImage.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

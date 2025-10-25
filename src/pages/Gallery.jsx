import React, { useState } from 'react';
import Header from '../components/Header';
import ca10 from '../assets/images/caros10.png'
import ca11 from '../assets/images/caros11.png'
import ca12 from '../assets/images/caros12.png'
import ca13 from '../assets/images/caros13.png'
import ca14 from '../assets/images/caros14.png'
import ca15 from '../assets/images/caros15.png'
import ca16 from '../assets/images/caros16.png'
import ca17 from '../assets/images/caros17.png'
import ca18 from '../assets/images/caros18.png'
import ca19 from '../assets/images/caros19.png'
import ca20 from '../assets/images/caros20.png'
import ca21 from '../assets/images/caros21.png'
import ca22 from '../assets/images/caros22.png'
import ca23 from '../assets/images/caros23.png'
import ca24 from '../assets/images/caros24.png'
import ca25 from '../assets/images/caros25.png'
import ca26 from '../assets/images/caros26.png'
import ca27 from '../assets/images/caros27.png'
import ca28 from '../assets/images/caros28.png'
import ca29 from '../assets/images/caros29.png'
import ca30 from '../assets/images/caros30.png'
import ca31 from '../assets/images/caros31.png'
import ca32 from '../assets/images/caros32.png'
import ca33 from '../assets/images/caros33.png'
import ca34 from '../assets/images/caros34.png'
import ca35 from '../assets/images/caros35.png'
import ca36 from '../assets/images/caros36.png'
import ca37 from '../assets/images/caros37.png'
import ca38 from '../assets/images/caros38.png'
import ca39 from '../assets/images/caros39.png'
import ca40 from '../assets/images/caros40.png'
import ca41 from '../assets/images/caros41.png'
import ca42 from '../assets/images/caros42.png'
import ca43 from '../assets/images/caros43.png'
import ca44 from '../assets/images/caros44.png'
import ca45 from '../assets/images/caros45.png'
import ca46 from '../assets/images/caros46.png'
import ca47 from '../assets/images/caros47.png'
import ca48 from '../assets/images/caros48.png'
import ca49 from '../assets/images/caros49.png'
import ca50 from '../assets/images/caros50.png'
import ca51 from '../assets/images/caros51.png'
import ca52 from '../assets/images/caros52.png'
import ca53 from '../assets/images/caros53.png'
import ca54 from '../assets/images/caros54.png'
import ca55 from '../assets/images/caros55.png'
import ca56 from '../assets/images/caros56.png'
import ca57 from '../assets/images/caros57.png'
import Footer from '../components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'eb1a', label: 'EB-1A Category' },
    { id: 'eb2niw', label: 'EB2-NIW Category' },
    { id: 'h1b', label: 'H-1B Category' },
    { id: 'status-change', label: 'Change of Status' },
    { id: 'others', label: 'Others' }
  ];

  const openModal = (index) => {
    const filteredImages = images.filter(img => 
      activeCategory === 'all' ? true : img.category === activeCategory
    );
    setSelectedImage(filteredImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const filteredImages = images.filter(img => 
      activeCategory === 'all' ? true : img.category === activeCategory
    );
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length 
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const filteredImages = images?.filter(img => 
    activeCategory === 'all' ? true : img?.category === activeCategory
  );

  return (
    <div>
      <Header/>
      <div className='bg-[#15110D] text-2xl text-[#FFFFFF] font-semibold px-[5%] py-[15px] mt-[90px]'>
        Gallery
      </div>
      <div className='bg-tertiary'>
        {/* Category Buttons */}
        <div className="container mx-auto px-4 pt-8">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category?.id}
                onClick={() => setActiveCategory(category?.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeCategory === category?.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                {category?.label}
              </button>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages?.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img 
                  src={image?.url} 
                  alt={image?.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75"
              onClick={closeModal}
            >
              <div 
                className="relative max-w-4xl max-h-[80vh] flex items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => navigateImage('prev')} 
                  className="absolute left-0 z-60 bg-white/50 rounded-full hover:bg-primary hover:text-white p-2 ml-[-50px]"
                >
                  &#10094;
                </button>

                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.alt} 
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
                />

                <button 
                  onClick={() => navigateImage('next')} 
                  className="absolute right-0 z-60 bg-white/50 rounded-full hover:bg-primary hover:text-white p-2 mr-[-50px]"
                >
                  &#10095;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Gallery;

const images = [
  { url: ca30, alt: 'Testimonial', category: 'eb1a' },
  { url: ca32, alt: 'Testimonial', category: 'eb1a' },
  { url: ca34, alt: 'Testimonial', category: 'eb1a' },
  { url: ca26, alt: 'Testimonial', category: 'eb1a' },
  { url: ca25, alt: 'Testimonial', category: 'eb1a' },
  { url: ca24, alt: 'Testimonial', category: 'eb1a' },
  { url: ca22, alt: 'Testimonial', category: 'eb1a' },
  { url: ca21, alt: 'Testimonial', category: 'eb1a' },
  { url: ca11, alt: 'Testimonial', category: 'eb1a' },
  { url: ca47, alt: 'Testimonial', category: 'eb1a' },
  { url: ca48, alt: 'Testimonial', category: 'eb1a' },
  { url: ca52, alt: 'Testimonial', category: 'eb1a' },
  { url: ca37, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca27, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca28, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca36, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca10, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca14, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca18, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca19, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca20, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca23, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca42, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca43, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca46, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca49, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca50, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca51, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca53, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca54, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca57, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca31, alt: 'Testimonial', category: 'h1b' },
  { url: ca35, alt: 'Testimonial', category: 'h1b' },
  { url: ca17, alt: 'Testimonial', category: 'h1b' },
  { url: ca41, alt: 'Testimonial', category: 'h1b' },
  { url: ca44, alt: 'Testimonial', category: 'h1b' },
  { url: ca45, alt: 'Testimonial', category: 'h1b' },
  { url: ca38, alt: 'Testimonial', category: 'status-change' },
  { url: ca16, alt: 'Testimonial', category: 'status-change' },
  { url: ca12, alt: 'Testimonial', category: 'status-change' },
  { url: ca40, alt: 'Testimonial', category: 'status-change' },
  { url: ca56, alt: 'Testimonial', category: 'status-change' },
  { url: ca29, alt: 'Testimonial', category: 'others' },
  { url: ca33, alt: 'Testimonial', category: 'others' },
  { url: ca13, alt: 'Testimonial', category: 'others' },
  { url: ca15, alt: 'Testimonial', category: 'others' },
  { url: ca39, alt: 'Testimonial', category: 'others' },
  { url: ca55, alt: 'Testimonial', category: 'others' },
];
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Header from '../components/Header';
import ca10 from '../assets/images/caros10.png'
import ca11 from '../assets/images/caros11.png'
import ca12 from '../assets/images/caros12.png'
import ca13 from '../assets/images/caros13.png'
import ca14 from '../assets/images/caros14.png'
import ca15 from '../assets/images/caros15.png'
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
  { url: ca10, alt: 'Testimonial', category: 'eb1a' },
  { url: ca11, alt: 'Testimonial', category: 'eb1a' },
  { url: ca12, alt: 'Testimonial', category: 'eb2niw' },
  { url: ca13, alt: 'Testimonial', category: 'h1b' },
  { url: ca14, alt: 'Testimonial', category: 'status-change' },
  { url: ca15, alt: 'Testimonial', category: 'others' },
];
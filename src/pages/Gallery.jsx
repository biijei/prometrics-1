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

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <Header/>
      <div className='bg-[#15110D] text-2xl text-[#FFFFFF] font-semibold px-[5%] py-[15px] mt-[90px]'>
        Gallery
      </div>
      <div className='bg-tertiary '>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={closeModal}
            >
              <div 
                className="relative max-w-4xl max-h-[80vh] flex items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                {/* <button 
                  onClick={closeModal} 
                  className="absolute top-2 right-2 z-60 bg-white rounded-full p-2"
                >
                  <X size={24} />
                </button> */}

                {/* Navigation Buttons */}
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
  { url: ca10, alt: 'Testimonial' },
  { url: ca11, alt: 'Testimonial' },
  { url: ca12, alt: 'Testimonial' },
  { url: ca13, alt: 'Testimonial' },
  { url: ca14, alt: 'Testimonial' },
  { url: ca15, alt: 'Testimonial' },
];
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Header from '../components/Header';
import ca1 from '../assets/images/caros1.png'
import ca2 from '../assets/images/caros2.png'
import ca3 from '../assets/images/caros3.png'
import ca4 from '../assets/images/caros4.png'
import ca5 from '../assets/images/caros5.png'
import ca6 from '../assets/images/caros6.png'
import ca7 from '../assets/images/caros7.png'
import ca8 from '../assets/images/caros8.png'

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
      <div className='bg-tertiary pb-[50px]'>
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
    </div>
  );
};

export default Gallery;

const images = [
  { url: ca1, alt: 'Testimonial' },
  { url: ca2, alt: 'Testimonial' },
  { url: ca3, alt: 'Testimonial' },
  { url: ca4, alt: 'Testimonial' },
  { url: ca5, alt: 'Testimonial' },
  { url: ca6, alt: 'Testimonial' },
  { url: ca7, alt: 'Testimonial' },
  { url: ca8, alt: 'Testimonial' },
];

// Example usage:
// const images = [
//   { url: '/path/to/image1.jpg', alt: 'Description 1' },
//   { url: '/path/to/image2.jpg', alt: 'Description 2' },
//   // ... more images
// ];
// <ImageGallery images={images} />
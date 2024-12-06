import { useState, useEffect, useRef } from "react";
import './slider.css'
import ca10 from '../assets/images/caros10.png'
import ca11 from '../assets/images/caros11.png'
import ca12 from '../assets/images/caros12.png'
import ca13 from '../assets/images/caros13.png'
import ca14 from '../assets/images/caros14.png'
import ca15 from '../assets/images/caros15.png'

const Slider = () => {
  const delay = 8000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const goToPrevious = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = index === slides.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="slideshow relative">
      {/* Left Navigation Button */}
      <button 
        onClick={goToPrevious} 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white p-2 rounded-full"
      >
        &#10094; {/* Left arrow character */}
      </button>

      {/* Right Navigation Button */}
      <button 
        onClick={goToNext} 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white p-2 rounded-full"
      >
        &#10095; {/* Right arrow character */}
      </button>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`slide w-[100%] bg-center bg-cover bg-no-repeat font-bold rounded-2xl px-6 py-5`}
            key={index}
          >
            <div className="w-fit mx-auto mb-[20px]">
              <img src={slide?.img} alt="Achievent" className="w-[1000px] "/>
            </div>
            <div className="slideshowDots">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const slides = [
  {
    img: ca10,
  },
  {
    img: ca11,
  },
  {
    img: ca12,
  },
  {
    img: ca13,
  },
  {
    img: ca14,
  },
  {
    img: ca15,
  },
  
];

export default Slider;

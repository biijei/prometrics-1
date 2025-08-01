import { useState, useEffect, useRef } from "react";
import './slider.css'
import ca27 from '../assets/images/caros27.png'
import ca28 from '../assets/images/caros28.png'
import ca29 from '../assets/images/caros29.png'
import ca30 from '../assets/images/caros30.png'
import ca31 from '../assets/images/caros31.png'
import ca32 from '../assets/images/caros32.png'
import ca33 from '../assets/images/caros33.png'
import ca34 from '../assets/images/caros34.png'
import ca37 from '../assets/images/caros37.png'
import ca38 from '../assets/images/caros38.png'
// import ca35 from '../assets/images/caros35.png'
// import ca36 from '../assets/images/caros36.png'
// import ca20 from '../assets/images/caros20.png'
// import ca21 from '../assets/images/caros21.png'
// import ca22 from '../assets/images/caros22.png'
// import ca23 from '../assets/images/caros23.png'
// import ca24 from '../assets/images/caros24.png'
// import ca25 from '../assets/images/caros25.png'
// import ca26 from '../assets/images/caros26.png'

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
    img: ca38,
  },
  {
    img: ca37,
  },
  {
    img: ca27,
  },
  {
    img: ca28,
  },
  {
    img: ca29,
  },
  {
    img: ca30,
  },
  {
    img: ca31,
  },
  {
    img: ca32,
  },
  {
    img: ca33,
  },
  {
    img: ca34,
  },
  // {
  //   img: ca35,
  // },
  // {
  //   img: ca36,
  // },
  // {
  //   img: ca16,
  // },
  // {
  //   img: ca10,
  // },
  // {
  //   img: ca11,
  // },
  // {
  //   img: ca12,
  // },
  // {
  //   img: ca13,
  // },
  // {
  //   img: ca14,
  // },
  // {
  //   img: ca15,
  // },
 
];

export default Slider;

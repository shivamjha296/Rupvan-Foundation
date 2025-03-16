import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  autoSlideInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoSlideInterval) return;
    
    const slideInterval = setInterval(() => {
      goToNext();
    }, autoSlideInterval);
    
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlideInterval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full">
      <div 
        className="w-full h-full transition-transform duration-500 ease-in-out"
        style={{ 
          backgroundImage: `url(${images[currentIndex].src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Left Arrow */}
      <div 
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-80 transition-all"
        onClick={goToPrevious}
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </div>

      {/* Right Arrow */}
      <div 
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-80 transition-all"
        onClick={goToNext}
      >
        <ChevronRight size={24} className="text-gray-800" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === slideIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel; 
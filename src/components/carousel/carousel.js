import React, { useState } from "react";


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        Prev
      </button>
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
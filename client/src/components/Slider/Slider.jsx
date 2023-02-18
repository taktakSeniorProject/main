import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Slider({ data }) {
  const [index, setIndex] = useState(0);

  // Generate a random list of 5 unique indices
  const randomIndices = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * data.length)
  ).filter((value, index, self) => self.indexOf(value) === index);

  // Retrieve the 5 random items from the data prop
  const items = randomIndices.map((i) => data[i]);

  const item = items[index] || {};
  const { title, price, img } = item;

  const nextSlide = () => {
    setIndex((oldIndex) => (oldIndex + 1) % items.length);
  };
  const prevSlide = () => {
    setIndex((oldIndex) => (oldIndex - 1 + items.length) % items.length);
  };
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => (oldIndex + 1) % items.length);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, items]);

  return (
    <div className="slider-container">
      <div className="slide" style={{ backgroundImage: `url(${img})` }}>
        <div className="slide-content">
          <h1>{title}</h1>
          <h3>{price}</h3>
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Slider;
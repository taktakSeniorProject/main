import React from 'react';
import { useState,useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
function Slider ({data}){
  console.log(data);
    const [index, setIndex] = useState(0);
    const {title,price,img}=data[0]
    const nextSlide = () => {
        setIndex((oldIndex) => {
          const result = (oldIndex + 1) % data.length;
          return result;
        });
      };
      const prevSlide = () => {
        setIndex((oldIndex) => {
          const result = (oldIndex - 1 + data.length) % data.length;
          return result;
        });
      };
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex((oldIndex) => {
            const result = (oldIndex + 1) % data.length;
            return result;
          });
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);
    return(
        <>
       <div>
        <div>
           <img className='amage' src={img}  />
           <h1>{title}</h1>
           <h3>{price}</h3>
         <img src={img} />
<button  onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FaChevronRight />
        </button>
</div>
</div>
</>
    )}
    export default Slider
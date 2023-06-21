import React from 'react';
import imag1 from '../../../../assets/images/banner/1.jpg' 
import imag2 from '../../../../assets/images/banner/2.jpg' 
import imag3 from '../../../../assets/images/banner/3.jpg' 
import imag4 from '../../../../assets/images/banner/4.jpg' 
import imag5 from '../../../../assets/images/banner/5.jpg' 
import imag6 from '../../../../assets/images/banner/6.jpg' 
import BannarItem from './BannarItem';


const bannerData = [
    {
        image: imag1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: imag2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: imag3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: imag4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: imag5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: imag6,
        prev: 5,
        id: 6,
        next: 1
    }
]

const Banner = () => {
    return (
      <div className="carousel w-full py-10">
      {
        bannerData.map(slide => <BannarItem 
            key={slide.id}
            slide={slide}       
        ></BannarItem>)
      }
      
       </div>
    );
};

export default Banner;
import React from 'react';
import imag1 from '../../../../assets/images/banner/1.jpg' 
import imag2 from '../../../../assets/images/banner/2.jpg' 
import imag3 from '../../../../assets/images/banner/3.jpg' 
import imag4 from '../../../../assets/images/banner/4.jpg' 
import imag5 from '../../../../assets/images/banner/5.jpg' 
import imag6 from '../../../../assets/images/banner/6.jpg' 
import './Banner.css';
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
      <div className="carousel w-full">
      {
        bannerData.map(slide => <BannarItem 
            key={slide.id}
            slide={slide}       
        ></BannarItem>)
      }
      
      
      
      
         {/* <BannarItem image={imag1}></BannarItem>
          <div id="slide2" className="carousel-item relative w-full">
                 <img src={banner2} alt="" />    
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                   <a href="#slide1" className="btn btn-circle">❮</a> 
                   <a href="#slide3" className="btn btn-circle">❯</a>
                 </div>
           </div>  */}
       </div>
    );
};

export default Banner;
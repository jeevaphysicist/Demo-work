import React, { Fragment, useState } from 'react';
import bg1 from "../../assets/files/bg1.png";
import bg2 from "../../assets/files/bg2.png";
import bg3 from "../../assets/files/bg3.png";

import { Navigation, Pagination, EffectFade ,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';




import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const HeroSection = () => {
  

  return (
   <Fragment>
     <div className="p-5 md:p-10 flex items-center sathoshibold justify-center">
     <Swiper
      spaceBetween={30}
      className='h-[80vh] md:h-[100vh] w-[100%] rounded-[12px] relative'
      effect={'fade'}
      autoplay={{ delay: 3000 }}      
      modules={[Navigation, Pagination,Autoplay ,EffectFade]}
    >    
     <SwiperSlide className='relative'>
        <div className='absolute top-0  left-0 right-0 bottom-0 bg-black opacity-60 z-10'>
        </div>
        <div className='absolute z-20 top-0 left-0 right-0 bottom-0 flex flex-col gap-5 items-center justify-center'>
          <div className=' text-[15px] md:text-[30px] xl:text-[50px] font-bold text-white max-w-[650px] text-center'>Elevate Your Space with Our Raised Flooring Solutions</div>
          <button className=' relative   px-[26px] rounded-[10px] py-[14px] text-[white] text-[10px] md:text-[15px]  hover:text-[#0041F5] button2-animation'>
            Request a Quote
            <div className='bg-[blue] -z-10 absolute top-0 left-0 right-0 bottom-0'></div>
         </button>
        </div>
        <div className="absolute text-white z-[20] flex flex-col gap-3 items-center justify-center left-0 right-0 bottom-10">
           <span className='w-0.5 h-1 bg-white'></span>       
           <span className='w-0.5 h-1 bg-white'></span>       
           <span className='text-[10px] md:text-[15px]'> Scroll down</span>
        </div>
        <img src={bg1} alt="" className='w-[100%] h-[100%] object-cover' />
     </SwiperSlide>
     <SwiperSlide className='relative'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-10'>
        </div>
        <div className='absolute z-20 top-0 left-0 right-0 bottom-0 flex flex-col gap-5 items-center justify-center'>
          <div className='text-[15px] md:text-[30px] xl:text-[50px] font-bold text-white max-w-[650px] text-center'>Elevate Your Space with Our Raised Flooring Solutions</div>
          <button className=' relative   px-[26px] rounded-[10px] py-[14px] text-[white] text-[10px] md:text-[15px]  hover:text-[#0041F5] button2-animation'>
            Request a Quote
            <div className='bg-[blue] -z-10 absolute top-0 left-0 right-0 bottom-0'></div>
         </button>
        </div>
        <div className="absolute text-white z-[20] flex flex-col gap-3 items-center justify-center left-0 right-0 bottom-10">
           <span className='w-0.5 h-1 bg-white'></span>       
           <span className='w-0.5 h-1 bg-white'></span>       
           <span className='text-[10px] md:text-[15px]'> Scroll down</span>
        </div>
        <img src={bg2} alt="" className='w-[100%] h-[100%] object-cover' />
     </SwiperSlide>
     <SwiperSlide className='relative'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-10'>
        </div>
        <div className='absolute z-20 top-0 left-0 right-0 bottom-0 flex flex-col gap-5 items-center justify-center'>
          <div className='text-[15px] md:text-[30px] xl:text-[50px] font-bold text-white max-w-[650px] text-center'>Elevate Your Space with Our Raised Flooring Solutions</div>
          <button className=' relative   px-[26px] rounded-[10px] py-[14px] text-[white] text-[10px] md:text-[15px]  hover:text-[#0041F5] button2-animation'>
            Request a Quote
            <div className='bg-[blue] -z-10 absolute top-0 left-0 right-0 bottom-0'></div>
         </button>
        </div>
        <div className="absolute text-white z-[20] flex flex-col gap-3 items-center justify-center left-0 right-0 bottom-10">
           <span className='w-0.5 h-1 bg-white'></span>       
           <span className='w-0.5 h-1 bg-white'></span>       
           <span className='text-[10px] md:text-[15px]'> Scroll down</span>
        </div>
        <img src={bg3} alt="" className='w-[100%] h-[100%] object-cover' />
     </SwiperSlide>
    
    </Swiper>  
     </div>
   </Fragment>
  )
}

export default HeroSection
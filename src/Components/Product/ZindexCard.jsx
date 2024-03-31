import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function ZindexCard( {data} ) {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        spaceBetween={300}
        pagination={true}
        modules={[EffectCoverflow,Navigation]}
        style={{width:'100%',padding:"50px 0px 50px 0px"}}
        loop
        className="mySwiper"
        navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
         onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
         }}  
        
      >
   {
    data.map(item=>
        <SwiperSlide style={{width:"300px",height:"300px"}}>
        <div className="bg-[#EFEFEF] sathoshibold p-8 rounded-[10px]">
          <img src={item.image} className="w-[100%] " />
        </div>
        <div className="flex items-center justify-center mt-5 font-bold text-[#101010] text-[25px]">{item.title}</div>
      </SwiperSlide>)
   }
      
        <div className="flex items-center justify-center w-[100%] mt-20 gap-5">
        <div ref={navigationNextRef}   >
        <div className="h-[50px] cursor-pointer flex items-center justify-center w-[50px] rounded-full border-2 border-[gray] ">
           <IoIosArrowRoundBack className="text-[20px]" />
        </div>
        </div>
        <div ref={navigationPrevRef} className="prev-swiper-button"  >
          <div className="h-[50px] cursor-pointer flex items-center justify-center w-[50px] rounded-full border-2 border-[gray] ">
          <IoIosArrowRoundForward className="text-[20px]" />
          </div>
        </div>
        </div>

        <div className="flex items-center justify-center w-[100%] mt-10 gap-5">
        <button className='border font-semibold relative border-[#D1D1D1] px-[26px] rounded-[10px] py-[14px] text-[#101010] text-[15px] hover:text-[white] button-animation'>
           View All Products
         </button>
        </div>
      
      

      </Swiper>
    </>
  );
}

import React, { Fragment, useState } from 'react';
import Logo from "../../assets/files/logo.png";

const Header = () => {
   

  return (
<Fragment>
  <div className='px-10 sathoshimedium z-50 py-10 bg-white h-[100px] sticky top-0 left-0 right-0 bottom-auto'>
     <div className='flex items-center justify-between'>
            <div className='w-1/3'>
            <img src={Logo} className='h-[50px]' alt="logo..." />
            </div>
        
         <div className='flex items-center justify-center gap-8 w-1/3'>
            <div className='text-[#000000] text-[15px] '>Home</div>
            <div className='text-[#808080] text-[15px]'>Products</div>
            <div className='text-[#808080] text-[15px]' >About  Us</div>
            <div className='text-[#808080] text-[15px]'>Gallery</div>
         </div>
         <div className='w-1/3 flex items-center justify-end'>
         <button className='border relative border-[#D1D1D1] px-[26px] rounded-[10px] py-[14px] text-[#101010] text-[15px] hover:text-[white] button-animation'>
            Request a Quote
         </button>
            {/* <button  
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='border relative border-[#D1D1D1] px-[26px] rounded-[10px] py-[14px] text-[#101010]  hover:text-white text-[15px]' >
            Request a Quote 
            <div className={`absolute top-0 bottom-0 left-0 right-0  rounded-[10px] -z-10 ${isHovering ? "bg-[blue] w-[100%] h-[100%]" :"w-0 h-0"} transistion-all duration-500`}></div>
            </button> */}
         </div>
     </div>
  </div>
</Fragment>
  )
}

export default Header
import React, { Fragment, useState } from 'react';
import Logo from "../../assets/files/logo.png";
import { motion } from 'framer-motion';
import { CgMenuMotion } from 'react-icons/cg';

const Header = () => {
   
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleAside = () => {
   setIsAsideOpen(!isAsideOpen);
 };

  return (
<Fragment>
  <div className='px-5 md:px-10 sathoshimedium z-50 py-10 bg-white h-[100px] sticky top-0 left-0 right-0 bottom-auto'>
     <div className='flex items-center justify-between'>
            <div className='w-1/3'>
            <img src={Logo} className='h-[50px]' alt="logo..." />
            </div>
        
         <div className=' hidden lg:flex  items-center justify-center gap-8 w-1/3'>
            <div className='text-[#000000] text-[15px] '>Home</div>
            <div className='text-[#808080] text-[15px]'>Products</div>
            <div className='text-[#808080] text-[15px]' >About  Us</div>
            <div className='text-[#808080] text-[15px]'>Gallery</div>
         </div>
         <div className='w-1/3 hidden lg:flex items-center justify-end'>
         <button className='border relative border-[#D1D1D1] px-[26px] rounded-[10px] py-[14px] text-[#101010] text-[15px] hover:text-[white] button-animation'>
            Request a Quote
         </button>
            
         </div>
         <div className={`block lg:hidden cursor-pointer px-4 py-2 `}><CgMenuMotion className='text-[35px] text-black' onClick={handleAside} /></div>
         
     </div>
     <div
        className={`fixed transition-all duration-500 ${
          isAsideOpen ? 'w-[100%]' : ''
        } opacity-30 z-50 top-0 bg-black bottom-0 right-0 text-[50px] text-[white]`}
        onClick={handleAside}
      ></div>

      <motion.div
        className={`fixed transition-all duration-500 ${
          isAsideOpen ? 'mr-0 rounded-l-[20px]' : '-mr-[300px]'
        } w-[250px] z-50 top-0 py-10 bg-[#fff] bottom-0 right-0 text-[50px] text-[#000000]`}
      >
        <div className="flex items-center justify-start w-[100%] gap-10 flex-col text-[18px]">
            <div className={` cursor-pointer px-4 py-2 ${true ? "text-[#000000] border-2 border-[#000000] bg-white font-bold rounded-[7px] " : ""}`} >Home</div>
            <div className={` cursor-pointer px-4 py-2 ${false ? "text-[#000000] bg-white font-bold rounded-[7px] " : ""}`}>Products</div>
            <div className={` cursor-pointer px-4 py-2 ${false ? "text-[#000000] bg-white font-bold rounded-[7px] " : ""}`}>About Us</div>
            <div className={` cursor-pointer px-4 py-2 ${false ? "text-[#000000] bg-white font-bold rounded-[7px] " : ""}`}>Gallery</div>
            <div className={` cursor-pointer px-4 py-2 ${false ? "text-[#000000] bg-white font-bold rounded-[7px] " : ""}`}><button className='border relative border-[#D1D1D1] px-[26px] rounded-[10px] py-[14px] text-[#101010] text-[15px] hover:text-[white] button-animation'>
            Request a Quote
         </button></div>
        </div>
      </motion.div>
  </div>
</Fragment>
  )
}

export default Header
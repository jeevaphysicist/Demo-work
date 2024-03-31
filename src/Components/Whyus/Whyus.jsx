import React, { Fragment } from 'react';
import Group from "../../assets/files/Group.png";
import chat from "../../assets/files/chat.png";
import compliance from "../../assets/files/compliance.png";
import medal from "../../assets/files/medal.png";
import skills from "../../assets/files/skills.png";
import satisfaction from "../../assets/files/satisfaction.png";

const Whyus = () => {
    let data = [
        {
        img:Group,
        title:"Trust",
        description:" Thousands of satisfied customers trust us and relying on us for our superior quality work , liability insurance, and a warranty."
       },
       {
        img:skills,
        title:"Expertise",
        description:"Drawing from a decade of hands-on experience, we've honed our craft, specializing in both residential and commercial flooring solutions."
       },
       {
        img:compliance,
        title:"Skills",
        description:"Our proficient team is well-versed and qualified to convert neglected spaces in your home into aesthetically pleasing areas."
       },
       {
        img:satisfaction,
        title:"Reputation",
        description:"We pride ourselves on delivering top-notch service, earning acclaim for excellence through satisfied customers."
       },
       {
        img:chat,
        title:"Communication",
        description:"We maintain open lines of communication with our clients the entire process, ensuring unparalleled customer service."
       },
       {
        img:medal,
        title:"Quality",
        description:"Our unwavering commitment revolves around delivering top-notch service. Rely on us to execute every job with the utmost precision and excellence."
       }
]
  return (
    <Fragment>
         <div className='bg-[#d2e9f6] sathosibold px-5 md:px-10 py-20'> 
          <div className='flex items-center justify-center text-[52px] font-semibold sathosiblack text-[#000000]'>Why Us?</div>
          <div className='grid grid-cols-6 gap-10 mt-20 px-5 md:px-20'>
            {
                data.map((item,index)=>
                <div className='col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-2' key={index}>
                <div className='bg-[#FFFFFF] h-[400px] rounded-[10px] px-4 py-10'>
                  <div className='flex items-center flex-col justify-center gap-5'>
                      <div className='h-[80px] flex items-center justify-center w-[80px] rounded-full p-4 bg-[#d2e9f6]'>
                        <img src={item.img} alt="" />
                      </div>
                      <div className='fond-semibold text-[30px] text-[#101010]' >{item.title}</div>
                      <div className='w-[80%] text-[#7B7B7B] text-[18px] text-center '>
                        {item.description}
                      </div>
                  </div>
                </div>
          </div>
                )
            }
          
           
           
            
          </div>
         </div>
    </Fragment>
  )
}

export default Whyus
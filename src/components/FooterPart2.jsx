import React from 'react'
import footerSVG from '../assets/hero.svg'
import footerBTM from '../assets/page2svganimation.svg'

const FooterPart2 = () => {
  return (
    <div className='flex justify-center items-center md:h-screen min-h-screen rounded-t-[50px] bg-[#EF9AAA] relative sm:pb-[20vh] pb-[28vh] sm:pt-0 pt-24'>
      <div className='flex justify-center items-start sm:items-center gap-[10vw] flex-wrap relative'>
        <div className='sm:order-2 sm:w-[max-content] w-full flex justify-center items-center'>
          <img src={footerSVG} className='w-[250px] sm:w-[22vw] mini:w-[50%] mobile:w-[50%] micro:w-[50%]' />
        </div>
        <div className='flex justify-center items-center flex-col text-[#3B0017] text-[20px] mini:text-[18px] mobile:text-[17px] micro:text-[16px] sm:order-1'>
          <h4 className='font-bold text-[32px] mini:text-[25px] mobile:text-[25px] micro:text-[25px]'>Get in Touch</h4>
          <div>Privacy Policies</div>
          <div>Returns</div>
          <div>Terms & Conditions</div>
          <div>Shipping</div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Careers</div>
        </div>
        <div className='flex justify-center items-center flex-col text-[#3B0017] text-[20px] mini:text-[18px] mobile:text-[17px] micro:text-[16px] sm:order-3'>
          <h4 className='font-bold text-[32px] mini:text-[25px] mobile:text-[25px] micro:text-[25px]'>More to Know</h4>
          <div>Our Coworkers</div>
          <div>Industry</div>
          <div>Location</div>
          <div>Work With Us</div>
          <div>Visit Us</div>
          <div>Manufacturing</div>
        </div>
      </div>
      <div className='absolute lg:bottom-[-50px] bottom-0 left-0'>
        <div className='w-full tablet:w-[150vw] mini:w-[180vw] mobile:w-[200vw] micro:w-[220vw] flex justify-start items-center flex-nowrap flex-shrink-0' style={{animation: "animateSVG 10s linear infinite"}}>
          <img src={footerBTM} className='w-full' />
          <img src={footerBTM} className='w-full' />
        </div>
        {/* <div className='bg-[#3B0017]'>hwelo</div> */}
      </div>
    </div>
  )
}

export default FooterPart2
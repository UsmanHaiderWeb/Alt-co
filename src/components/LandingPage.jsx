import React from 'react'
import hero from '../assets/hero.svg'
import Star from './Star'

const LandingPage = () => {
  return (
    <div>
        <div className='flex justify-center items-center w-full  pt-32 pb-10 bg-[#EF9AAA]'>
            <div className='sm:w-[42%] hidden sm:flex justify-center items-center'>
                <img src={hero} className='w-1/2' />
            </div>
            <div className='w-[90%] lgtab:w-[80%] sm:w-[55%]'>
                <h1 className='text-[80px] leading-[80px] mobile:text-[60px] mobile:leading-[60px] micro:text-[55px] micro:leading-[60px] font-["chand600"] text-[#3B0017]'>TART <span className='font-sans'>&</span> SMART,</h1>
                <h1 className='text-[80px] leading-[80px] mobile:text-[60px] mobile:leading-[60px] micro:text-[55px] micro:leading-[60px] font-["chand600"] text-[#3B0017]'>MADE WITH PLANTS.</h1>
            </div>
            <Star Y="top-[20%]" X="left-[35%]" />
            <Star Y="bottom-[15%]" X="right-[15%]" />
        </div>
    </div>
  )
}

export default LandingPage
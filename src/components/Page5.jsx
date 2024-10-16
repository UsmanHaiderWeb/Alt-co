import React from 'react'
import page5svg from '../assets/page5svg.svg'
import Star from './Star'
import Page5_Page8 from './Page5_Page8'

const Page5 = () => {
  return (
    <div className='relative bg-[#3B0017] pt-5'>
        <Page5_Page8 content="VEGAN DELIGHT" svg={page5svg} bgColor="bg-[#B16CDF]" textColor="text-[#461A63]" />
        <Star X="left-[10%]" Y="top-[0%]" width={window.innerWidth > 800 ? "w-[10vw]" : "w-[16vw]"} />
        <Star X="right-[10%]" Y="bottom-[10%]" width={window.innerWidth > 800 ? "w-[8vw]" : "w-[10vw]"} />
    </div>
  )
}

export default Page5
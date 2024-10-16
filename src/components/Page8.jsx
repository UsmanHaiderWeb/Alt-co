import React from 'react'
import page8svg from '../assets/page8svg.svg'
import Page5_Page8 from './Page5_Page8'
import Star from './Star'

const Page8 = () => {
    return (
        <div className='relative bg-[#FCFBE4] pt-5'>
            <Page5_Page8 content="DAIRY" svg={page8svg} bgColor="bg-[#81B5EE]" textColor="text-[#15559B]" />
            <Star X="left-[10%]" Y="top-[0%]" width="w-24" />
            <Star X="right-[10%]" Y="bottom-[10%]" width="w-16" />
        </div>
      )
    }

export default Page8
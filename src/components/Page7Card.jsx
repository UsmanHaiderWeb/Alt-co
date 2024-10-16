import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'

const Page7Card = (i) => {
  const imgOnHover = useRef();
  const imgToShow = useRef();
  function enter() {
    imgOnHover.current.style.opacity = 0;
    imgToShow.current.style.opacity = 1;
  }
  function leave() {
    imgOnHover.current.style.opacity = 1;
    imgToShow.current.style.opacity = 0;
  }

  return (
    <div className='w-[240px] mini:w-[45vw] mobile:w-[250px] micro:w-[85%]'>
        <a href={i.link} className='relative inline-block w-full px-[10px] cursor-pointer' onMouseEnter={enter} onMouseLeave={leave}>
            <img ref={imgOnHover} src={i.imgOnHover} className='w-full h-[275px] mini:h-[250px] object-cover object-center rounded-3xl duration-300 pointer-events-none' />
            <img ref={imgToShow} src={i.imgToShow} className='h-full absolute top-0 left-1/2 -translate-x-1/2 object-cover object-top opacity-0 duration-300 pointer-events-none' />
        </a>
        <div className='mt-10 mini:mt-8 mobile:mt-6 micro:mt-5'>
            <p className={`w-full text-center ${i.textColor} text-[17px] mini:text-[15px]`}>{i.caption}</p>
            <h3 className={`w-full text-center ${i.textColor} text-[40px] mini:text-[30px] leading-[30px] font-["braked"] uppercase`}>{i.name}</h3>
        </div>
    </div>
  )
}

export default Page7Card
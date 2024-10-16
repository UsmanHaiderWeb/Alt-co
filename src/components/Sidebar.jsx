import React, { useRef } from 'react'
import sidebarBTM from '../assets/page2svganimation.svg'
import heroSVG from '../assets/hero.svg'
import sidebarStar from '../assets/sidebarStar.svg'
import sidebarTOP from '../assets/sidebar_1.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Sidebar = (i) => {
  const sidebarBTMAimator = useRef()
  useGSAP(() => {
    if (i.sidebarState) {
      gsap.to(sidebarBTMAimator.current, {
        y: 0,
        duration: 0.5,
        ease: "back.out",
        delay: 1
      })
    }
    if (!i.sidebarState) {
      gsap.to(sidebarBTMAimator.current, {
        y: 50,
        duration: 0.5,
        ease: "back.out",
        delay: 1
      })
    }
  })
  return (<>
        <div className='w-full tablet:w-[150vw] mini:w-[180vw] mobile:w-[200vw] micro:w-[220vw] flex justify-start items-center flex-nowrap flex-shrink-0' style={{animation: "animateSVG 1s linear infinite"}}>
            <img src={sidebarTOP} className='w-full' />
            <img src={sidebarTOP} className='w-full' />
        </div>
        <div className='w-full h-screen flex justify-center items-center mobile:items-start micro:items-start bg-[#ffde17]'>
            <div className='w-[40%] sm:flex lgtab:flex justify-center items-center hidden'>
                <img src={heroSVG} className='w-[20vw]' />
            </div>
            <div className='w-full sm:w-[55%] lgtab:w-[55%] self-center font-["chand600"] text-[#3B0017] text-[85px] leading-[100px] mobile:text-[65px] mobile:leading-[80px] micro:text-[20vw] micro:leading-[23vw] px-8 mobile:px-4 micro:px-2 lgtab:px-0 sm:px-0'>
                <div>Products</div>
                <div>Recipes</div>
                <div>About Us</div>
                <div>Blogs</div>
            </div>
        </div>
        <div ref={sidebarBTMAimator} className='w-full tablet:w-[150vw] mini:w-[180vw] micro:w-[220vw] mobile:w-[200vw] flex justify-start items-center flex-nowrap flex-shrink-0 self-end absolute bottom-[-35px] sm:bottom-[-0px] md:bottom-[-60px] lg:bottom-[-80px] left-0 translate-y-[50px]' style={{animation: "animateSVG 10s linear infinite"}}>
          <img src={sidebarBTM} className='w-full' />
          <img src={sidebarBTM} className='w-full' />
        </div>
    </>
  )
}

export default Sidebar
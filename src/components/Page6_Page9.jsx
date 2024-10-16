import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap'

const Page6_Page9 = (i) => {
    const heroImg = useRef()
    useGSAP(() => {
        gsap.from(heroImg.current, {
          scale: 2,
          scrollTrigger: {
            trigger: heroImg.current,
            scroller: "body",
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1
          }
        })
        return;
    })

    return (
        <div className='relative h-[120vh] tablet:h-[100vh] mini:h-[90vh] mobile:h-[80vh] micro:h-[80vh] overflow-hidden'>
            <div className='w-full tablet:w-[150vw] mini:w-[180vw] mobile:w-[200vw] micro:w-[220vw] absolute top-0 left-0 z-[2]'>
                <img src={i.topsvg} className='w-full' />
            </div>
            <div className='w-full h-full relative z-[1] overflow-hidden'>
                <img ref={heroImg} src={i.heroImg} className='w-full h-full object-cover object-right' />
            </div>
            <div className='w-full tablet:w-[150vw] mini:w-[180vw] mobile:w-[200vw] micro:w-[220vw] absolute bottom-0 left-0 flex justify-start items-center flex-nowrap flex-shrink-0 z-[2]' style={{animation: "animateSVG 10s linear reverse infinite"}}>
                <img src={i.botsvg} className='w-full' />
                <img src={i.botsvg} className='w-full' />
            </div>
        </div>
      )
    }

export default Page6_Page9
import svganimate from "../assets/landingpage.svg"
import React, { useRef } from 'react'
import page2IMG from '../assets/page2Banner.webp'
import page2svganimation from '../assets/page2svganimation.svg'
import Star from "./Star"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

const Page2 = () => {
  const page2Img = useRef()
  useGSAP(() => {
    gsap.to(page2Img.current, {
      scale: 1,
      scrollTrigger: {
        trigger: page2Img.current,
        scroller: "body",
        start: "top 75%",
        end: "bottom 25%",
        scrub: 1
      }
    })
    return;
  })


  return (
    <div className='relative h-[700px] tablet:h-[650px] mini:h-[600px] mobile:h-[500px] micro:h-[400px]'>
        <div className='w-full lgtab:w-[150vw] tablet:w-[180vw] mini:w-[200vw] mobile:w-[200vw] micro:w-[220vw] whitespace-nowrap flex justify-start items-center flex-shrink-0 absolute top-0 left-0 z-[-1]' style={{animation: "animateSVG 10s linear infinite"}}>
            <img src={svganimate} className="w-full" />
            <img src={svganimate} className="w-full" />
        </div>
        <div className="h-full relative z-[-2]">
            <img ref={page2Img} src={page2IMG} className="h-full object-cover object-center scale-[2]" />
        </div>
        <div className="w-full lgtab:w-[150vw] tablet:w-[180vw] mini:w-[200vw] mobile:w-[200vw] micro:w-[220vw] absolute bottom-0 left-0 flex justify-start items-center flex-shrink-0 whitespace-nowrap z-[-1]">
            <img src={page2svganimation} style={{animation: "animateSVG 10s linear reverse infinite"}} />
            <img src={page2svganimation} style={{animation: "animateSVG 10s linear reverse infinite"}} />
        </div>
        <Star X="left-[15%]" Y="bottom-[5%]" width="120px" />
    </div>
  )
}

export default Page2
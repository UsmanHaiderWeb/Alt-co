import React, { useRef } from 'react'
import Page3Cards from './Page3Cards'
import page3_part1 from '../assets/page3_part1.webp'
import page3_part2 from '../assets/page3_part2.webp'
import page3_part3 from '../assets/page3_part3.webp'
import page3_part4 from '../assets/page3_part4.webp'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const Page3 = () => {
  gsap.registerPlugin(ScrollTrigger)

  const page3Con1 = useRef()
  const page3Con2 = useRef()
  const page3Img1 = useRef()
  const page3Img2 = useRef()
  const page3Img3 = useRef()
  const page3Img4 = useRef()

  useGSAP(() => {
    function AnimatePage3Cards(a, b, c, d) {
      let endPoint = 600
      gsap.set(a,{
        backgroundColor: b
      })
      gsap.to(a, {
        x: '-100vw',
        ease: "none",
        scrollTrigger: {
          trigger: a,
          scroller: "body",
          start: 'top 0',
          end: `top -${endPoint}vw`,
          pin: true,
          // snap: 0.33,
          scrub: true,
        }
      })
      let aImage = a.querySelectorAll("img")[0]
      gsap.from(aImage, {
        y: 250,
        opacity: 0,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: a,
          scroller: "body",
          start: 'top 20%',
          end: `top -600vw`,
          // markers: true,
          toggleActions: "restart reverse restart reverse"
        }
      })
      let aImageCon = a.querySelectorAll(".imgCon")[0]
      gsap.to(aImageCon, {
        top: -250,
        left: -250,
        rotate: -30,
        ease: "none",
        scrollTrigger: {
          trigger: a,
          scroller: "body",
          start: 'top 0%',
          end: `top -40%`,
          // markers: true,
          scrub: 0.5
        }
      })
      gsap.to(a, {
        backgroundColor: c,
        ease: "none",
        scrollTrigger: {
          trigger: d,
          scroll: "body",
          start: "top 0%",
          end: "top -80%",
          scrub: true,
          // markers: true,
        }
      })
      let aImageCon2 = a.querySelectorAll(".imgCon")[1]
      gsap.from(aImageCon2, {
        top: '200%',
        left: '100%',
        rotate: 30,
        // opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: a,
          scroller: "body",
          start: 'bottom 100%',
          end: `bottom 10%`,
          // markers: true,
          scrub: 0.5
        }
      })
    }
    AnimatePage3Cards(page3Con1.current, "#68219B", "#16549c", page3Img1.current, page3Img2.current)
    AnimatePage3Cards(page3Con2.current, "#f87a47", "#7c503f", page3Img3.current, page3Img4.current)
    return;
  })

  
  return (
    <div>
      <div ref={page3Con1} className='w-[max-content] flex justify-start items-center flex-shrink-0 whitespace-nowrap'>
        <div ref={page3Img1}>
          <Page3Cards page3img={page3_part1} headlineColor="text-[#ffffff60]" headline="BERRY" linking="#" />
        </div>
        <div ref={page3Img2}>
          <Page3Cards page3img={page3_part2} headlineColor="text-[#ffffff60]" headline="CLASSIC" linking="#" />
        </div>
      </div>
      <div ref={page3Con2} className='w-[max-content] flex justify-start items-center flex-shrink-0 whitespace-nowrap'>
        <div ref={page3Img3}>
          <Page3Cards page3img={page3_part3} headlineColor="text-[#ffffff60]" headline="VANILLA" linking="#" />
        </div>
        <div ref={page3Img4}>
          <Page3Cards page3img={page3_part4} headlineColor="text-[#ffffff60]" headline="MADAGA" linking="#" />
        </div>
      </div>
    </div>
  )
}

export default Page3

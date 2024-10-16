import React, { useRef } from 'react'
import slider from '../assets/page2svganimation.svg'
import Page4Leaf from './Page4Leaf'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page4 = () => {
    const leaf1 = useRef()
    const leaf2 = useRef()
    const leaf3 = useRef()
    const leaf4 = useRef()
    const leafCon = useRef()

    useGSAP(() => {
        function animateLeaf(a, b) {
            gsap.from(a, {
                y: '-50%',
                x: '-50%',
                top: '50%',
                left: '50%',
                opacity: 0,
                scrollTrigger: {
                    trigger: b,
                    scroller: "body",
                    start: "top 70%",
                    end: "top 35%",
                    scrub: 2,
                }
            })
        }
        if (window.innerWidth > 1000) {
            animateLeaf(leaf1.current, leafCon.current)
            animateLeaf(leaf2.current, leafCon.current)
            animateLeaf(leaf3.current, leafCon.current)
            animateLeaf(leaf4.current, leafCon.current)
        }
        return;
    })


return (
    <div className='bg-[#7B503F] pt-16'>
        <div className='w-full tablet:w-[150vw] mini:w-[180vw] mobile:w-[200vw] micro:w-[220vw] flex justify-start items-center flex-nowrap flex-shrink-0' style={{animation: "animateSVG 10s linear infinite"}}>
            <img src={slider} className='w-full' />
            <img src={slider} className='w-full' />
        </div>
        <div className='bg-[#3B0017] h-[max-content] py-16 md:h-[600px] md:py-0 flex justify-center items-center'>
            <div ref={leafCon} className='relative w-full -translate-y-10 flex justify-center items-center flex-wrap gap-y-10'>
                <div className='w-full md:w-[max-content] font-["braked"] text-[20vw] leading-[15vw] tablet:text-[28vw] tablet:leading-[22vw] mini:text-[30vw] mini:leading-[25vw] mobile:text-[35vw] mobile:leading-[30vw] micro:text-[25vw] micro:leading-[20vw] text-[#B16CDF] bg-[#3B0017] flex justify-center items-center md:flex-col gap-x-8 micro:gap-x-3'>
                    <span className='relative z-[3] bg-[#3B0017]'>GOOD</span> <span className='relative z-[3] bg-[#3B0017]'>GUT</span>
                </div>
                <div ref={leaf1} className='w-1/2 md:w-[max-content] mobile:w-full micro:w-full md:absolute static top-[0%] lg:left-[10%] md:left-[5%]'>
                    <Page4Leaf rotate="rotate-[20deg]" bg="bg-[#9ACA3F]" content1="100%" content2="VEGAN"/>
                </div>
                <div ref={leaf2} className='w-1/2 md:w-[max-content] mobile:w-full micro:w-full md:absolute static bottom-[0%] lg:left-[10%] md:left-[5%]'>
                    <Page4Leaf rotate="rotate-[-20deg]" bg="bg-[#FFDE17]" content1="Complete" content2="Protein"/>
                </div>
                <div ref={leaf3} className='w-1/2 md:w-[max-content] mobile:w-full micro:w-full md:absolute static top-[0%] lg:right-[10%] md:right-[5%]'>
                    <Page4Leaf rotate="rotate-[20deg]" bg="bg-[#FFDE17]" content1="Complete" content2="Protein"/>
                </div>
                <div ref={leaf4} className='w-1/2 md:w-[max-content] mobile:w-full micro:w-full md:absolute static bottom-[0%] lg:right-[10%] md:right-[5%]'>
                    <Page4Leaf rotate="rotate-[-20deg]" bg="bg-[#9ACA3F]" content1="100%" content2="VEGAN"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page4
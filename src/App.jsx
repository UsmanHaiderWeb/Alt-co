import React, { useRef, useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import gsap from 'gsap'
import homepagestar from './assets/homepagestar.svg'
import sidebarStar from './assets/sidebarStar.svg'

const App = () => {
  const [sidebarState, setSidebarState] = useState(true)
  const sidebar = useRef()
  const sidebarSticky = useRef()
  function showSidebar() {
    gsap.to(sidebar.current, {
      y: "0%",
      duration: 0.5,
    })
    gsap.to(sidebarSticky.current, {
      y: "0%",
      opacity: 1,
      duration: 0.5,
      delay: 0.5
    })
  }
  function hideSidebar() {
    gsap.to(sidebar.current, {
      y: "100%",
      duration: 0.5,
      delay: 0.08
    })
    gsap.to(sidebarSticky.current, {
      y: "-50px",
      opacity: 0,
      duration: 0.5
    })
  }


  return (
    <div className='w-full min-h-screen'>
      <div ref={sidebar} className='w-full min-h-screen fixed z-[49] bottom-0 left-0 flex justify-center items-center flex-wrap translate-y-[100%]'>
        <Sidebar sidebarState={sidebarState} />
      </div>
      <div className='w-full absolute top-0 left-0 hidden sm:flex justify-center items-center flex-nowrap flex-shrink-0 gap-x-24 bg-[#ffde17] text-[#D14761] font-["chand500"] py-[6px] z-[48] pointer-events-none overflow-hidden'>
          <div className='whitespace-nowrap'>PLANT BASED PROTEINS</div>
          <img src={homepagestar} className='w-7 h-10' />
          <div className='whitespace-nowrap'>PLANT BASED PROTEINS</div>
          <img src={homepagestar} className='w-7 h-10' />
          <div className='whitespace-nowrap'>PLANT BASED PROTEINS</div>
          <img src={homepagestar} className='w-7 h-10' />
          <div className='whitespace-nowrap'>PLANT BASED PROTEINS</div>
      </div>
      <div ref={sidebarSticky} className='w-full fixed top-0 left-0 hidden sm:flex justify-center items-center flex-nowrap flex-shrink-0 gap-x-20 bg-[#3B0017] text-[#ffde17] font-["chand500"] py-2 z-[50] pointer-events-none translate-y-[-50px] opacity-0 overflow-hidden'>
          <div className='whitespace-nowrap'>PLANT BASED PROTEINS</div>
          <img src={sidebarStar} className='w-7 h-10' />
          <div className='whitespace-nowrap'>PLANT BASED PROTEINS</div>
          <img src={sidebarStar} className='w-7 h-10' />
          <div className='whitespace-nowrap'>PLANT BASED PROTEINS</div>
          <img src={sidebarStar} className='w-7 h-10' />
          <div className='whitespace-nowrap'>PLANT BASED PROTEINS</div>
      </div>
      <Header showSidebar={showSidebar} hideSidebar={hideSidebar} setSidebarState={setSidebarState} sidebarState={sidebarState} />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
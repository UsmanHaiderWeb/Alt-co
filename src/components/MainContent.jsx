import React, { memo } from 'react'
import LandingPage from './LandingPage'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from './Page8'
import Page10 from './Page10'
import Page9 from './Page9'

const MainContent = () => {
  return (
    <main className='overflow-hidden'>
      <LandingPage />
      <Page2 />
      <div className='bg-[#3B0017] pb-16'>
        <p className='text-[#EF9AAA] text-center w-[80%] mx-auto text-[28px] leading-[32px] tablet:text-[25px] tablet:leading-[29px] mini:text-[22px] mini:leading-[27px] mobile:text-[20px] mobile:leading-[24px] micro:text-[18px] micro:leading-[22px]'>Discover the delicious power of AltCo! Savor our vegan protein in Chocolatey Delight, Vanilla Dream, Berry Bliss, and Tropical Twist. Pair with our creamy Oat Milk, smooth Almond Milk, and signature Alt Milk. Embrace health and taste with AltCo!</p>
      </div>
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
    </main>
  )
}

export default memo(MainContent)
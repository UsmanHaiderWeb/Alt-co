import React from 'react'
import Page7_Page10 from './Page7_Page10'
import page10_1 from '../assets/page10_1.webp'
import page7_2 from '../assets/page7_2.webp'
import page10_3 from '../assets/page10_3.webp'
import page10_4 from '../assets/page10_4.webp'
import page10_5 from '../assets/page10_5.webp'
import page7_6 from '../assets/page7_6.webp'
import page10_7 from '../assets/page10_7.webp'
import page10_8 from '../assets/page10_8.webp'

const Page10 = () => {
    let page10Data = [
        {
            imgOnHover: page10_1,
            imgToShow: page10_5,
            name: "orange peel",
            caption: "Alt Co dark chocolate",
            link: "#"
        },
        {
            imgOnHover: page7_2,
            imgToShow: page7_6,
            name: "almond & canberry",
            caption: "Alt Co dark chocolate",
            link: "#"
        },
        {
            imgOnHover: page10_3,
            imgToShow: page10_7,
            name: "45% dark",
            caption: "Alt Co dark chocolate",
            link: "#"
        },
        {
            imgOnHover: page10_4,
            imgToShow: page10_8,
            name: "sea salt",
            caption: "Alt Co dark chocolate",
            link: "#"
        },
    ]


return (
    <div className='relative w-full bg-[#81B5EE] min-h-screen'>
        <Page7_Page10 propData={page10Data} textColor="text-[#15559B]" />
    </div>
  )
}

export default Page10
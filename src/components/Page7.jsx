import React from 'react'
import Page7_Page10 from './Page7_Page10'
import page7_1 from '../assets/page7_1.webp'
import page7_2 from '../assets/page7_2.webp'
import page7_3 from '../assets/page7_3.webp'
import page7_4 from '../assets/page7_4.webp'
import page7_5 from '../assets/page7_5.webp'
import page7_6 from '../assets/page7_6.webp'
import page7_7 from '../assets/page7_7.webp'
import page7_8 from '../assets/page7_8.webp'

const Page7 = () => {
    let page7Data = [
        {
            imgOnHover: page7_1,
            imgToShow: page7_5,
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
            imgOnHover: page7_3,
            imgToShow: page7_7,
            name: "45% dark",
            caption: "Alt Co dark chocolate",
            link: "#"
        },
        {
            imgOnHover: page7_4,
            imgToShow: page7_8,
            name: "sea salt",
            caption: "Alt Co dark chocolate",
            link: "#"
        },
    ]


return (
    <div className='relative w-full bg-[#FCFBE4] min-h-screen'>
        <Page7_Page10 propData={page7Data} textColor="text-[#3B0017]" />
    </div>
  )
}

export default Page7
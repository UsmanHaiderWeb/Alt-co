import React from 'react'
import footer_part1 from '../assets/footer_part1.png'
import footer_part2 from '../assets/footer_part2.png'
import footer_part3 from '../assets/footer_part3.png'
import footer_part4 from '../assets/footer_part4.png'
import footer_part5 from '../assets/footer_part5.png'

const FooterPart1 = () => {
    const images = [footer_part1, footer_part2, footer_part3, footer_part4, footer_part5]

    return (
        <div className='w-full h-screen flex justify-center items-center flex-wrap'>
            <div>
                <div className='w-full'>
                    <h1 className='w-full text-center font-["braked"] text-[#4B1528] text-[65px] leading-[55px] overflow-hidden'>AVAILABLE ON</h1>
                </div>
                <div className='w-full mt-7 flex justify-center items-center gap-x-20 flex-wrap gap-y-5'>
                    {images.map((img, idx) => (
                        <img key={`${img}, ${idx}`} src={img} className='w-[100px]' />
                    ))}
                </div>
            </div>
        </div>
      )
}

export default FooterPart1
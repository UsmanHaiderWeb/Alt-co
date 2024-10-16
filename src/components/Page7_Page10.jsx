import React from 'react'
import Page7Card from './Page7Card'

const Page7_Page10 = (i) => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center overflow-hidden lg:px-20 mini:px-0 px-3 py-10'>
        <div className='w-full flex flex-wrap justify-center items-center gap-x-[5vw] mini:gap-x-[20px] gap-y-10'>
            {i.propData.map((data, idx) => {
                return <Page7Card key={`${data.name}, ${idx}`} imgToShow={data.imgToShow} imgOnHover={data.imgOnHover} name={data.name} caption={data.caption} textColor={i.textColor} link={data.link} />
            })}
        </div>
    </div>
  )
}

export default Page7_Page10
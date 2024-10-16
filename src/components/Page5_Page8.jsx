import React from 'react'

const Page5_Page8 = (i) => {
  return (<>
    <div className='w-full tablet:w-[150vw] mini:w-[180vw] mobile:w-[200vw] micro:w-[220vw] flex justify-start items-center flex-nowrap flex-shrink-0' style={{animation: "animateSVG 10s linear infinite"}}>
        <img src={i.svg} className='w-full' />
        <img src={i.svg} className='w-full' />
    </div>
    <div className={`${i.bgColor} pb-16`}>
        <div className='relative'>
            <div>
                <h1 className={`${i.textColor} text-[20vw] leading-[15vw] text-center font-["braked"]`}>{i.content}</h1>
            </div>
        </div>
    </div></>
  )
}

export default Page5_Page8
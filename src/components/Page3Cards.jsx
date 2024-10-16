import React from 'react'

const Page3Cards = (i) => {
    return (
        <div className='w-[100vw] relative h-screen flex justify-center items-center'>
            <div className='w-[100vw] h-full flex justify-center items-center flex-col mt-16 sm:gap-y-0 gap-y-10'>
                <h1 className={`w-full relative sm:translate-y-0 lgtab:translate-y-0 tablet:translate-y-0 -translate-y-1/4 text-[40vw] leading-[33vw] text-center font-["braked"] ${i.headlineColor}`}>{i.headline}</h1>
                <a href={i.linking} className='inline-block mini:translate-y-20 mobile:translate-y-20 micro:translate-y-20' >
                    <button className='text-[30px] px-5 py-3 rounded-lg text-[#ffffff60] font-["chand700"] border-[1px] border-[#ffffff60] border-solid tracking-wider'>SHOP NOW</button>
                </a>
            </div>
            <div className='imgCon absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 mini:w-full mobile:w-full micro:w-full flex justify-center items-center'>
                <div className='mini:w-[80%] mobile:w-[85%] micro:w-[90%]' style={{animation: "page3CardAnimation 3s linear infinite"}}>
                    <img src={i.page3img} className='w-[530px] mini:w-full mobile:w-full micro:w-full inline-block relative' />
                </div>
            </div>
        </div>
    )
}

export default Page3Cards
import React from 'react'
import star from '../assets/star.svg'

const Star = (i) => {
  return (
    <div className={`absolute ${i.X} ${i.Y} ${i.width ? i.width : "w-[80px]"}`}>
        <img src={star} className='w-full' />
    </div>
  )
}

export default Star
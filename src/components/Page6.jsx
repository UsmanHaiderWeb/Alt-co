import React, { memo } from 'react'
import page6svg from '../assets/page6svg.svg'
import page6Img from '../assets/page6Img.webp'
import page6_2svg from '../assets/page6_2svg.svg'
import Page6_Page9 from './Page6_Page9'


const Page6 = () => {
  return <Page6_Page9 topsvg={page6svg} heroImg={page6Img} botsvg={page6_2svg} />
}

export default memo(Page6)
import React, { memo } from 'react'
import FooterPart1 from './FooterPart1'
import FooterPart2 from './FooterPart2'

const Footer = () => {
  return (
    <footer className='w-full overflow-hidden'>
        <FooterPart1 />
        <FooterPart2 />
    </footer>
  )
}

export default memo(Footer)
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ src }) => {
  return (
    <>
        <LazyLoadImage className='card' src={src} alt='cover' effect='blur'/>
        {/* <img className='card' src={src} alt='cover' /> */}
    </>
  )
}

export default Card
import React from 'react'
import Slider from 'react-slick'

// Components
import PosterComponent from '../Poster/Poster.component'

// Config
import PosterCarouselSettings from '../../config/Poster.Carousel'

function Posterslidercomponent(props) {
    const sliderConfig = props.config ? props.config : PosterCarouselSettings;
  return (
    <>
         <div className='flex flex-col item-start my-2 gap-2'>
        <h3 className={` text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800" }`}>{props.title}</h3>
        <p className={` text-sm ${props.isDark ? "text-white" : "text-gray-800" }`}>{props.subtitle}</p>
    </div>
   <Slider {...sliderConfig}>
    {props.images.map((image)=>(
        <PosterComponent {...image} isDark={props.isDark} />
    ))}
   </Slider>
    </>
  )
}

export default Posterslidercomponent
import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Adcarousel() {
    const settingsLG = {
         arrows :true, autoplay : true ,centerMode : true , centerPadding : "500px" , slidesToShow : 1 ,infinite: true, slidesToScroll: 1,
    }


    const settings = {
        arrows : true,
        centerPadding : "300px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        }
    const images = [
        "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1691073123397-d93b4e3b9991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1691256853764-f9917b70e5e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    ]
    
  return (
   <>
   <div className='lg:hidden'>
   <Slider {...settings}>
        {images.map((image)=>(
            <div className='w-full h-56 md:h-80 py-3'>
                <img src={image} alt="testing" className='w-full h-full rounded-md'  />
            </div>
        ))}
    </Slider>
   </div>

   <div className="hidden lg:block">
   <Slider {...settingsLG}>
        {images.map((image)=>(
            <div className='w-full h-96 px-2 py-3'>
                <img src={image} alt="testing" className='w-full h-full rounded-md' />
            </div>
        ))}
    </Slider>
   </div>
   
</>

  )
}

export default Adcarousel
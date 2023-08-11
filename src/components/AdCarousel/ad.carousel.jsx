import React , {useEffect,useState} from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

function Adcarousel() {

    const [images,setImages] = useState([])
    useEffect(()=> {
         const requestNowPlayingMovie = async ()=>{
            const getImages = await axios.get("/movie/now_playing")
            setImages(getImages.data.results)
         }
         requestNowPlayingMovie()
    },[])
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
  return (
   <>
   <div className='lg:hidden'>
   <Slider {...settings}>
        {images.map((image)=>(
            <div className='w-full h-56 md:h-80 py-3'>
                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className='w-full h-full rounded-md'  />
            </div>
        ))}
    </Slider>
   </div>

   <div className="hidden lg:block">
   <Slider {...settingsLG}>
        {images.map((image)=>(
            <div className='w-full h-96 px-2 py-3'>
                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className='w-full h-full rounded-md' />
            </div>
        ))}
    </Slider>
   </div>
   
</>

  )
}

export default Adcarousel
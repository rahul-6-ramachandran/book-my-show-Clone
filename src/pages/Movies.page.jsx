import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

// Components
import MovieLayout from '../layouts/Movie-layout'
import MovieNavbar from '../components/Navbar/movieNavbar.component'
import CastComponent from '../components/Cast/Cast.component'
import Posterslider from '../components/PosterSlider/Poster.slider.component'


// Config
import TempPosters from '../config/TempImages'
import Slider from 'react-slick'



function Moviespage() {

    const [movie,setMovie] = useState([{}])
    const [likedMovies,setLikedMovies] = useState([])
    const [casts,setCasts] = useState([])
    const [crews,setCrews] = useState([])
    const {id} = useParams()

    // Movie Details
    useEffect(()=>{
        const requestMovie = async ()=>{
            const getMovieData = await axios.get(`/movie/${id}`)
            setMovie(getMovieData.data)
        }
        requestMovie();
    },[id])

    // Movie cast details
    useEffect(()=>{
        const requestMovieCasts = async ()=>{
            const getMovieCast = await axios.get(`/movie/${id}/credits`)
            setCasts(getMovieCast.data.cast)
            setCrews(getMovieCast.data.crew)
        }
        requestMovieCasts();
    },[id])


    useEffect(()=>{
        const requestSimilarMovie = async ()=>{
            const getLikedMovieData = await axios.get(`/movie/${id}/similar`)
            setLikedMovies(getLikedMovieData.data.results)
        }
        requestSimilarMovie();
    },[id])

    const settings ={
        infinity : false,
        autoplay : false,
        speed : 500,
        slidesToShow : 5,
        slidesToScroll : 4,
        initialSlide : 0,
        responsive : [{
            breakpoints : 1024,
            settings: {
                slidesToShow : 3,
                slidesToScroll: 3,
                infinite : true
            }
        },
        {
            breakpoints : 600,
            settings: {
                slidesToShow : 2,
                slidesToScroll: 2,
                initialSlide : 2,
            }
        },
        {
            breakpoints : 480,
            settings: {
                slidesToShow : 2,
                slidesToScroll: 1,
                
            }
        }
    ],
    }

    const settingsCast ={
        infinity : false,
        autoplay : false,
        speed : 500,
        slidesToShow : 6,
        slidesToScroll : 4,
        initialSlide : 0,
        responsive : [{
            breakpoints : 1024,
            settings: {
                slidesToShow : 5,
                slidesToScroll: 3,
                infinite : true
            }
        },
        {
            breakpoints : 600,
            settings: {
                slidesToShow : 3,
                slidesToScroll: 2,
                initialSlide : 2,
            }
        },
        {
            breakpoints : 480,
            settings: {
                slidesToShow : 2,
                slidesToScroll: 1,
                
            }
        }
    ],
    }


  return (
    <>
    <MovieNavbar/>
    <MovieLayout/>
    <div className='container my-12 mx-auto px-4 lg:ml-20 lg:2/5'>
        <div className='flex flex-col items-start gap-3'>
             <h2 className='text-grey-800 text-2xl font-bold'>About The Movie</h2>
        <p>{movie.overview}</p>
        </div>
        <div className='my-8'>
            <hr />
        </div>
        <div>
            <div className=' flex flex-col items-start my-8'>
                <h2 className='text-grey-800 text-2xl font-bold'>Casts</h2>
            </div>
            
                <Slider {...settingsCast}>
                {casts.map((cast)=>(
                <CastComponent image ={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} 
                name={cast.original_name} role={cast.character}/>
                ))}
                </Slider>
        </div>
        <div className='my-8'>
            <div className=' flex flex-col items-start my-8'>
                    <h2 className='text-grey-800 text-2xl font-bold'>Crew</h2>
                </div>
                <Slider {...settingsCast}>
                    {crews.map((crew)=>(
                         <CastComponent image ={`https://image.tmdb.org/t/p/original/${crew.profile_path}`}
                         name={crew.original_name} role={crew.character}/>

                    ))}
                
                </Slider>
                
        </div>
        <div className='my-8'>
        <div className=' flex flex-col items-start my-8 '>
                    <h2 className='text-grey-800 text-2xl font-bold mb-5'>Top reviews</h2>
                    <p>Summary of <span>{movie.vote_average}</span> reviews</p>
                    <div className='flex flex-wrap gap-3 my-3 items-start'>
                        
                        <div className='text-btn-400 border-grey-400 text-lg  border rounded-full px-8 py-2 '>#Blockbuster <span className='text-black text-sm p-1 bg-bms-100'>540</span></div>
                        <div className='text-btn-400 border-grey-400 text-lg  border rounded-full px-8 py-2 '>#SuperDirection <span className='text-black text-sm p-1 bg-bms-100'>540</span></div>
                        <div className='text-btn-400 border-grey-400 text-lg  border rounded-full px-8 py-2 '>#GreatActing <span className='text-black text-sm p-1 bg-bms-100'>540</span></div>
                        <div className='text-btn-400 border-grey-400 text-lg  border rounded-full px-8 py-2 '>#WowMusic <span className='text-black text-sm p-1 bg-bms-100'>540</span></div>
                        <div className='text-btn-400 border-grey-400 text-lg  border rounded-full px-8 py-2 '>#Rocking <span className='text-black text-sm p-1 bg-bms-100'>540</span></div>
                        <div className='text-btn-400 border-grey-400 text-lg  border rounded-full px-8 py-2 '>#WellMAde <span className='text-black text-sm p-1 bg-bms-100'>540</span></div>

                    </div>

                </div>

        </div>
        <div className='my-8'> 
            < Posterslider images={likedMovies}
                config = {settings}
                isDark = {false}
                title="You might also like"
                subtitle="" />

        </div>
        <div className='my-8'> 
    
        </div>

    </div>

    </>
    
  )
}

export default  Moviespage
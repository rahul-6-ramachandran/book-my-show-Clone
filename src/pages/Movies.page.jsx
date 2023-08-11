import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
// Components
import MovieLayout from '../layouts/Movie-layout'
import MovieNavbar from '../components/Navbar/movieNavbar.component'
import CastComponent from '../components/Cast/Cast.component'
import Posterslider from '../components/PosterSlider/Poster.slider.component'


// Config
import TempPosters from '../config/TempImages'


function Moviespage() {

    const [movie,setMovie] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        const requestMovie = async ()=>{
            const getMovieData = await axios.get(`/movie/${id}`)
            setMovie(getMovieData.data)
            console.log(movie)
        }
        requestMovie();
    },[])

    const settings ={
        infinity : false,
        autoplay : false,
        speed : 500,
        slidesToShow : 4,
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
  return (
    <>
    <MovieNavbar/>
    <MovieLayout/>
    <div className='container my-12 mx-auto px-4 lg:ml-20 lg:2/5'>
        <div className='flex flex-col items-start gap-3'>
             <h2 className='text-grey-800 text-2xl font-bold'>About The Movie</h2>
        <p>Muthuvel Pandian is a strict yet empathetic jailer who must stop a gang from trying to rescue their leader from prison.</p>
        </div>
        <div className='my-8'>
            <hr />
        </div>
        <div>
            <div className=' flex flex-col items-start my-8'>
                <h2 className='text-grey-800 text-2xl font-bold'>Casts</h2>
            </div>
            <div className='flex flex-wrap gap-4 items-center'>
                <CastComponent image ="https://in.bmscdn.com/iedb/artist/images/website/poster/large/rajinikanth-1795-29-12-2016-01-58-24.jpg" name="Rajinikanth" role="Actor"/>
                <CastComponent image ="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ramya-krishnan-2920-18-09-2017-05-34-55.jpg" name="Rajinikanth" role="Actor"/>
                <CastComponent image ="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jackie-shroff-882-19-09-2017-05-13-08.jpg" name="Rajinikanth" role="Actor"/>
                <CastComponent image ="https://in.bmscdn.com/iedb/artist/images/website/poster/large/yogi-babu-1055754-02-12-2021-12-53-23.jpg" name="Rajinikanth" role="Actor"/>

            
            </div>
        </div>
        <div className='my-8'>
            <div className=' flex flex-col items-start my-8'>
                    <h2 className='text-grey-800 text-2xl font-bold'>Crew</h2>
                </div>
                <div className='flex flex-wrap gap-4 items-center'>
                    <CastComponent image ="https://in.bmscdn.com/iedb/artist/images/website/poster/large/rajinikanth-1795-29-12-2016-01-58-24.jpg" name="Rajinikanth" role="Actor"/>
                    <CastComponent image ="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ramya-krishnan-2920-18-09-2017-05-34-55.jpg" name="Rajinikanth" role="Actor"/>
                    <CastComponent image ="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jackie-shroff-882-19-09-2017-05-13-08.jpg" name="Rajinikanth" role="Actor"/>
                    <CastComponent image ="https://in.bmscdn.com/iedb/artist/images/website/poster/large/yogi-babu-1055754-02-12-2021-12-53-23.jpg" name="Rajinikanth" role="Actor"/>

                
                </div>
        </div>
        <div className='my-8'>
        <div className=' flex flex-col items-start my-8 '>
                    <h2 className='text-grey-800 text-2xl font-bold mb-5'>Top reviews</h2>
                    <p>Summary of <span>7.8k</span> reviews</p>
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
            < Posterslider images={TempPosters}
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
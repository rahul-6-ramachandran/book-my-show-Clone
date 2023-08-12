import React , {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MovieInfo from './Movie.info.component'


function Movieherocomponent() {
  
    const {id} = useParams()
    const [movie,setMovie] = useState([])

    useEffect(()=>{
        const requestMovie = async ()=>{
            const getMovieData = await axios.get(`/movie/${id}`)
            setMovie(getMovieData.data)
        }
        requestMovie()
    },[id])
  return (
    <div>
        {/* For Mobile Screens */}
        <div className='relative md:hidden w-full' style={{height: "calc(180vw)"}}>
            <div className='absolute z-30 bottom-10'>
                <MovieInfo/>
            </div>
            <div className='w-full h-8 absolute bg-black z-10 bottom-0 rounded-b-lg  text-white text-center text-md '/>
                <img className='w-full h-full rounded-md' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            
        </div>


        {/* For Medium Screens */}
        <div className=' relative hidden md:block h-96 w-full lg:hidden ' style={{height: "calc(60vw)"}}>
        <div className='absolute z-30 bottom-10 '>
                <MovieInfo/>
            </div>
        <div className='w-full h-8 absolute bg-black z-10 bottom-0 rounded-b-lg  text-white text-center text-md '/>

                 <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />

        </div>

        {/* For Large Screens */}
        <div className=' relative hidden lg:block  w-full ' style={{height:"30rem"}}>

           
            <div className='absolute h-full  z-10  w-full'
             style={
                {backgroundImage:"linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}
            }
            
             />
            <div className='absolute z-30 left-24 top-10 flex item-center gap-6'>
                <div className='  w-64 h-96  '>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""  className='w-full h-full rounded-xl '/>
                </div>
                <div>
                    <MovieInfo/>
                </div>
            </div>

            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className='w-full h-full' />
           
        </div>
    </div>
  )
}

export default Movieherocomponent
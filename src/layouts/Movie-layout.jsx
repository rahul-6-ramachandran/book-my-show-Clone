import React , {useEffect,useContext, useState }from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

// Components
import Navbar from '../components/Navbar/navbar.component'
import Adcarousel from '../components/AdCarousel/ad.carousel'
import MovieNavbar from '../components/Navbar/movieNavbar.component'
import Movieherocomponent from '../components/MovieHero/Movie.hero.component'

//Context

import { MovieContext } from '../Context/Movie.context'



function MovieLayout(props) {

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
    <>
    <Movieherocomponent/>

    {props.Children}
    </>
   
  )
}

export default MovieLayout
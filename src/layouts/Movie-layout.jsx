import React from 'react'

// Components
import Navbar from '../components/Navbar/navbar.component'
import Adcarousel from '../components/AdCarousel/ad.carousel'
import MovieNavbar from '../components/Navbar/movieNavbar.component'
import Movieherocomponent from '../components/MovieHero/Movie.hero.component'
function MovieLayout(props) {
  return (
    <>
    <Movieherocomponent/>

    {props.Children}
    </>
   
  )
}

export default MovieLayout
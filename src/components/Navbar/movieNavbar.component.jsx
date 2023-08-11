import React ,{useContext, useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { FiChevronRight,FiMenu ,FiChevronDown} from 'react-icons/fi'
import { TfiSearch } from 'react-icons/tfi'
import {FaChevronDown} from 'react-icons/fa'
import {BsShare} from 'react-icons/bs'


// Content
import { MovieContext } from '../../Context/Movie.context'






function MovieNavbar() {
    // const [movie,setMovie] = useState([])
    // const {id} = useParams()
    // useEffect(()=>{
    //     const requestMovie = async ()=>{
    //         const getMovieData = await axios.get(`/movie/${id}`)
    //         setMovie(getMovieData.data)
    //         console.log(id)
    //     }
    //     requestMovie();
    // },[])

    const { movie } = useContext(MovieContext)
    return (

        <nav className='absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-3 w-100'>
            {/* For Mobile Screens */}
            <div className=' md:hidden'>
                <div className='text-white flex item-center justify-between'>
                    <div className='text-left' ><h3 className='text-white font-bold' >{movie.original_title}</h3>
                    </div>
                    <div className='p-3 w-9 h-9'>
                        <BsShare className='w-4 h-4 ' />
                    </div>
                </div>
            </div>


            {/* For Medium Screens */}
            <div className='hidden md:flex justify-between lg:hidden  p-1'>
                
                    <div className='  flex item-center ms-4 justify-between'>
                        <img className='w-20 ps-3' src="src\assets\images\images (1).png" alt="" />
                    </div>
                    <div className='p-3 w-9 h-9'>
                        <BsShare className='w-4 h-4 ' />
                    </div>
                
                <div className='flex items-center text-right'>
                <div className='flex item-center  text-right '>
                    <div className='text-right'>
                    <span className='text-gray-300 text-sm flex item-center px-3 py-2 hover:text-white cursor-pointer'>Kochi<FaChevronDown className='m-1'/></span>
                    </div>

                    <div className=''>
                    <button className='bg-btn-300 rounded-md trext-white py-2 px-3 text-white text-sm  flex item-center'>Signin</button>
                    </div>
                    
                    <div className='w-9 h-9'>
                    <button className='trext-white py-3 px-3 text-white w-9 h-9 flex item-center'><FiMenu className='font-bold'/></button>
                    </div>
                    
                </div>
                </div>
            </div>

            {/* For Large Screens */}
            <div className='hidden lg:flex item-center p-2 container   '>
            <div className='  flex item-center ms-5 ps-2 gap-x-0' >
                        <img className='w-20 ms-8' src="src\assets\images\images (1).png" alt="" />
                    </div>
                    <div className='w-3/5 flex item-center bg-white px-2 py-1 rounded-md'>
                        <TfiSearch className='m-2' />
                        <input type="search" className='w-full  bg-transparent border-none focus:outline-none' name="" id="" placeholder='Search For Movies,Events,Plays,Sports and Activities' />
                    </div>
                
                <div className='flex items-end text-right ps-8 '>
                <div className='flex   text-right items-end ps-8  '>
                    <div className='text-right ps-8 '>
                    <span className='text-gray-300 text-lg flex item-center px-3 py-2 hover:text-white cursor-pointer'>Kochi<FaChevronDown className='m-1'/></span>
                    </div>

                    <div className=''>
                    <button className='bg-btn-300 rounded-md trext-white py-2 px-3 text-white text-lg  flex item-center'>Signin</button>
                    </div>
                    
                    <div className='w-9 h-9'>
                    <button className='trext-white py-3 px-3 text-white w-9 h-9 flex item-center'><FiMenu className='font-bold'/></button>
                    </div>
                    
                </div>
                </div>

            </div>
        </nav>

    )
}

export default MovieNavbar
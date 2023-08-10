import React from 'react'
import {BiSolidLike} from 'react-icons/bi'
import { Link } from 'react-router-dom'

function MovieInfo() {
  return (
    <> 
         <div className='mx-3 flex flex-col gap-4'>
            <h1 className=' font-bold mx-5 mt-5 text-4xl text-white item-center'>Jailer</h1>
            <div className='  mx-4 flex item-center'>
               <BiSolidLike className='text-green-700 text-2xl me-2 h-8 item-right'/>
               <p className='text-white mx-0'><span className='text-2xl font-medium'>326.1K</span>  are interested</p>
            </div>
            
            <div className='flex item-center justify-between bg-transparent border-white border rounded-lg mx-4'>
                <div className='text-white mx-4 my-2'>
                <h3 className='text-lg font-medium'>In cinemas</h3>
                <p className='text-xs font-normal'>Are you interested in watching this movie?</p>
                </div>
                <div className='hidden lg:block text-center px-3 my-auto'>
                    <button className='bg-white p-2 font-medium text-sm text-xs rounded-sm'>I'm Interested</button>
                </div>
            </div>
            
            <div className='flex item-center  mx-3'>
                <div className='text-grey-800 bg-white px-2 font-normal py-1  rounded-sm mx-1'>
                    <Link to="">2D</Link>
                </div>
                <div className='text-grey-800 bg-white px-2 font-normal py-1 mx-1 rounded-sm'>
                    <Link to="">Tamil,</Link>
                    <Link to="">Malayalam,</Link>
                    <Link to="">Kannada,</Link>
                    <Link to="">Hindi,</Link>
                    <Link to="">Telugu</Link>
                </div>
            </div>
            <div className='text-white text-md font-normal mx-3 px-1'>
                <h4>2hr 49m &bull; <Link>Action</Link>,
                <Link>Drama</Link>,
                <Link>Thriller</Link> &bull;
                UA &bull;
                10 Aug,2023
                 </h4>
            </div>

            <div className='flex item-center px-4 md:w-screen lg:w-full'>
                <button className='bg-btn-400 text-white px-16 py-3 rounded-lg'>
                    Book Tickets
                </button>
            </div>
         </div>
    </>
   
  )
}

export default MovieInfo
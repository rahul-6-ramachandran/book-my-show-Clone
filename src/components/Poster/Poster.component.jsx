import React from 'react'
import { Link } from 'react-router-dom'

function PosterComponent(props) {
  return (
    <Link to={`movie/${props.id}`} relative='path'>
         <div className='flex flex-col items-start  gap-2  px-2'>
            <div className='h-40 md:h-80 '>
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className='w-full h-full rounded-md' />
            </div>
            <div className=''>
            <h3 className={`text-sm lg:text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700" }`}>{props.original_title}</h3></div>
            <p className={`text-sm font-bold ${props.isDark ? "text-white" : "text-gray-700" }`}>{props.original_language}</p>
            
         </div>
    </Link>
   
  )
}

export default PosterComponent

import React from 'react'

function PosterComponent(props) {
  return (
    <>
         <div className='flex flex-col items-start gap-2 px-1'>
            <div className='h-40 md:h-80 '>
                <img src={props.src} alt={props.title} className='w-full h-full rounded-md' />
            </div>
            <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-700" }`}>{props.title}</h3>
            <p className={`text-sm font-bold ${props.isDark ? "text-white" : "text-gray-700" }`}>{props.subtitle}</p>

         </div>
    </>
   
  )
}

export default PosterComponent

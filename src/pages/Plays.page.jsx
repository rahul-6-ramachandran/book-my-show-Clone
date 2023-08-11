import React from 'react'
import PosterComponent from '../components/Poster/Poster.component'


// Components
import PlaysFilter from '../components/PlaysFilters/Plays.filters.component'

function Playspage() {
  return (
    <>
        <div className='container mx-auto px-4 my-8'>

            <div className='w-full lg:flex lg:flex-row-reverse'>
            <div className='lg:w-3/4 '> 
                <h2 className='text-2xl font-bold'>Plays</h2>
                <div className='flex flex-wrap '>
                    <div className='w-1/2 md:w-1/3 flex flex-wrap my-3'>
                    <PosterComponent src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00365815-dpmumlqays-portrait.jpg" 
                    title="ONLINE HORROR STORY TELLING"
                    subtitle = "English/Hindi $30"/>
                    </div>
                    
                    <div className='w-1/2  md:w-1/3 flex flex-wrap my-3'>
                    <PosterComponent src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00365815-dpmumlqays-portrait.jpg" 
                    title="ONLINE HORROR STORY TELLING"
                    subtitle = "English/Hindi $30"/>
                    </div>

                    <div className='w-1/2 md:w-1/3 flex flex-wrap my-3'>
                    <PosterComponent src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00365815-dpmumlqays-portrait.jpg" 
                    title="ONLINE HORROR STORY TELLING"
                    subtitle = "English/Hindi $30"/>
                    </div>
                </div>
                </div>
                
                
                <div className='lg:w-3/12'>
                    <h2 className='text-2xl font-bold mb-4' >Filters</h2>
                    <div className='flex flex-col gap-2'>
                        <PlaysFilter
                    title = "Date"
                    tags = {["Today","Tomorrow","This Weekend"]}
                    />
                    <PlaysFilter
                    title = "Language"
                    tags = {["English","Hindi",]}
                    />
                    </div>
                </div>

         </div>
        
         </div>
    </>
   
  )
}

export default Playspage
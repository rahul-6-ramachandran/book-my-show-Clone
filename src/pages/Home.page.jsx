import React from 'react'

// Components
import Navbar from '../components/Navbar/navbar.component'
import EntertainmentCardSlider from '../components/EntertainmentCards/entertainment'
import Posterslider from '../components/PosterSlider/Poster.slider.component'
import Adcarousel from '../components/AdCarousel/ad.carousel'

// Config
import TempPosters from '../config/TempImages'

function HomePage() {
    return (
        <>
        <Navbar/>
        <Adcarousel/>
            <div className='flex flex-col gap-10'>
                <div className='container mx-auto px-4'>

                    <h1 className='text-2xl my-3 font-bold text-gray-800'>The Best of Entertainments</h1>
                    <EntertainmentCardSlider />

                </div>

                <div className='bg-bms-800 py-6'>
                    <div className="container  mx-auto px-4 flex flex-col gap-3">
                        <div className="container hidden md:flex">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="" className='w-full h-full' />
                        </div>
                        < Posterslider images={TempPosters} title="Premieres" subtitle="Brand New Releases Every Friday" isDark/>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4 my-8'>
            < Posterslider images={TempPosters}
                isDark = {false}
                title="Online Streaming events"
                subtitle="" />
            </div>

            <div className='container mx-auto px-4 my-8'>
            < Posterslider images={TempPosters}
                isDark = {false}
                title="Outdoor Events"
                subtitle="" />
            </div>
        </>

    )
}

export default HomePage
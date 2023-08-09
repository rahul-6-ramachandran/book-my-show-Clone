import React from 'react'

// Components
import EntertainmentCardSlider from '../components/EntertainmentCards/entertainment'

function HomePage() {
    return (
        <>
            <div className='container mx-auto px-4'>
                <h1 className='text-2xl my-3 font-bold text-gray-800'>The Best of Entertainments</h1>
                <EntertainmentCardSlider />
            </div>
        </>

    )
}

export default HomePage
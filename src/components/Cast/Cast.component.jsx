import React from 'react'

function CastComponent(props) {
  return (
    <div>
    <div className='flex flex-col items-center'>
        <div className='w-32 h-32'>
            <img src={props.image} alt="" 
            className='w-full h-full rounded-full' />
        </div>
        <div className='flex flex-col item-center text-center'>
            <h3 className='text-md  text-grey-800'>{props.name}</h3>
            <h5 className='text-md font-light text-grey-500'>{props.role}</h5>
        </div>
    </div>
    </div>
  )
}

export default CastComponent
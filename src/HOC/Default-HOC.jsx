import React from 'react'
import DefaultLayout from '../layouts/default-layout'
import HomePage from '../pages/Home.page'

function DefaultHOC() {
  return (
    <div>
        <DefaultLayout/>
        <HomePage/>
        
      
    </div>
  )
}

export default DefaultHOC
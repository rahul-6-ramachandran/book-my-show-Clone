import React from 'react'
import DefaultLayout from '../layouts/default-layout'
import { Outlet } from 'react-router-dom';

function DefaultHOC() {
  return (
    <div>
        <DefaultLayout/>
        <Outlet/>
        
      
    </div>
  )
}

export default DefaultHOC
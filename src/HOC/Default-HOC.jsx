import React from 'react'
import { Outlet } from 'react-router-dom';
import DefaultLayout from '../layouts/Default-layout';

function DefaultHOC() {
  return (
    <div>
        <DefaultLayout/>
        <Outlet/>
        
      
    </div>
  )
}

export default DefaultHOC
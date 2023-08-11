import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements, 
  Routes
} from "react-router-dom"

// axios Settings
import axios from 'axios'

import './index.css'
import HomePage from './pages/Home.page.jsx'
import DefaultHOC from './HOC/Default-HOC.jsx'

import MovieHOC from './HOC/Movie-HOC'
import Playspage from './pages/Plays.page'

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {}
axios.defaults.params["api_key"] = import.meta.env.VITE_API_KEY;


const router = createBrowserRouter(
  createRoutesFromElements (
    
    <Route path="/" element={<DefaultHOC />} >
      <Route index element={<HomePage />} />
      <Route path='/movie' element={<MovieHOC/>}/>
      <Route path='/plays' element={<Playspage/>}/>
    </Route>
      
      

      )
    

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

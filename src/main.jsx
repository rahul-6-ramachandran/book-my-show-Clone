import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements 
} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import HomePage from './pages/Home.page.jsx'
import DefaultHOC from './HOC/Default-HOC.jsx'


const router = createBrowserRouter(
  createRoutesFromElements (
  <Route path="/" element={<DefaultHOC/>}>
   
   </Route> )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

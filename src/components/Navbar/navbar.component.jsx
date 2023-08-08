import React from 'react'
import { FiChevronRight,FiMenu ,FiChevronDown} from 'react-icons/fi'
import { TfiSearch } from 'react-icons/tfi'
import {FaChevronDown} from 'react-icons/fa'


const navMd = () => { }
const navLg = () => { }

function Navbar() {
    return (

        <nav className='bg-bms-700 p-3 w-100'>
            {/* For Mobile Screens */}
            <div className=' md:hidden'>
                <div className='text-white flex item-center justify-between'>
                    <div className='text-left' ><h3 className='text-white font-bold' >It All Starts Here!</h3>
                        <span className='text-gray-300 text-xs flex items-center'>Kochi <FiChevronRight />
                        </span>
                    </div>
                    <div className='rounded-lg p-2 bg-btn-300 '>
                        <button className=' end-0 '>Use App</button>
                    </div>
                    <div className='p-3 w-9 h-9'>
                        <TfiSearch className='w-4 h-4 ' />
                    </div>
                </div>
            </div>


            {/* For Medium Screens */}
            <div className='hidden md:flex lg:hidden  p-1'>
                
                    <div className='  flex item-center ms-4 justify-between'>
                        <img className='w-20 ps-3' src="src\assets\images\images (1).png" alt="" />
                    </div>
                    <div className='w-4/5 flex item-center bg-white px-2 py-1 rounded-md'>
                        <TfiSearch className='m-2' />
                        <input type="search" className='w-full  bg-transparent border-none focus:outline-none' name="" id="" placeholder='Search For Movies,Events,Plays,Sports and Activities' />
                    </div>
                
                <div className='flex items-center text-right'>
                <div className='flex item-center  text-right '>
                    <div className='text-right'>
                    <span className='text-gray-300 text-sm flex item-center px-3 py-2 hover:text-white cursor-pointer'>Kochi<FaChevronDown className='m-1'/></span>
                    </div>

                    <div className=''>
                    <button className='bg-btn-300 rounded-md trext-white py-2 px-3 text-white text-sm  flex item-center'>Signin</button>
                    </div>
                    
                    <div className='w-9 h-9'>
                    <button className='trext-white py-3 px-3 text-white w-9 h-9 flex item-center'><FiMenu className='font-bold'/></button>
                    </div>
                    
                </div>
                </div>
            </div>

            {/* For Large Screens */}
            <div className='hidden lg:flex item-center p-2 container   '>
            <div className='  flex item-center ms-5 ps-2 gap-x-0' >
                        <img className='w-20 ms-8' src="src\assets\images\images (1).png" alt="" />
                    </div>
                    <div className='w-3/5 flex item-center bg-white px-2 py-1 rounded-md'>
                        <TfiSearch className='m-2' />
                        <input type="search" className='w-full  bg-transparent border-none focus:outline-none' name="" id="" placeholder='Search For Movies,Events,Plays,Sports and Activities' />
                    </div>
                
                <div className='flex items-end text-right ps-8 '>
                <div className='flex   text-right items-end ps-8  '>
                    <div className='text-right ps-8 '>
                    <span className='text-gray-300 text-lg flex item-center px-3 py-2 hover:text-white cursor-pointer'>Kochi<FaChevronDown className='m-1'/></span>
                    </div>

                    <div className=''>
                    <button className='bg-btn-300 rounded-md trext-white py-2 px-3 text-white text-lg  flex item-center'>Signin</button>
                    </div>
                    
                    <div className='w-9 h-9'>
                    <button className='trext-white py-3 px-3 text-white w-9 h-9 flex item-center'><FiMenu className='font-bold'/></button>
                    </div>
                    
                </div>
                </div>

            </div>
        </nav>

    )
}

export default Navbar
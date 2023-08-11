import React from 'react'
import { Disclosure } from '@headlessui/react'
import {FiChevronUp , FiChevronDown} from 'react-icons/fi'

function PlaysFilter(props) {
  return (
    <Disclosure>
      {
        ({open}) => (
            <>
            <Disclosure.Button className="py-2 flex items-center gap-3">
                {open ? <FiChevronUp/> : <FiChevronDown/>} 
                <span className={open ? "text-red-700" : "text-grey-800"}>{props.title}</span>
   
  </Disclosure.Button>
  <Disclosure.Panel className="text-gray-500">
            <div className='flex items-center gap-3 flex-wrap '>
                {props.tags.map((tag)=>(
                    <>
                    <div className='border border-gray-200 px-3 py-1'>
                        <span className='text-red-500'>{tag}</span>
                    </div>
                    </>
                ))}
                
            </div>
  </Disclosure.Panel>            
        </>
        )
      }
    </Disclosure>
  )
}

export default PlaysFilter
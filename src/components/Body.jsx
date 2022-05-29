import React from 'react'
import mapimage from '../assets/map.jpg'
import {Link} from 'react-scroll'

const Body = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <img className = "object-cover h-full w-full absolute -z-10" src={mapimage}/>
        <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
            <h1>What are you looking for?</h1>
            <div className='px-4 py-4'>
                <button className='m-2'><Link to = "map" spy={true} smooth= {true}>Want to Rent </Link></button>
                <button className='m-2'><Link to = "map" spy={true} smooth= {true}>Have something to Rent</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Body
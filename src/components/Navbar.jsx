import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[90px] bg-black fixed'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <div><h1 className='text-[#00d8ff]'>RENTER</h1></div>
            <div>
                <ul className='flex text-white items-center'>
                    <li>Home</li>
                    <li>About Us</li> 
                    <button> Connect </button>
                </ul>
               
            </div>
        </div>
    </div>
  )
}

export default Navbar
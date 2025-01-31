import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-white text-black pt-7 border-gray-200 pb-7 border-b-1'>
        <div className='flex items-center gap-5'>
            <img className="h-6 w-2vw object-cover "src="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg" alt="" />
            <button className='pt-1 pb-1 pl-4 pr-4 bg-pink-200  rounded-xl'>We are hiring!</button>
        </div>
        <div className='flex items-center gap-7'> 
            <h4>Work</h4>
            <h4>Services</h4>
            <h4>About</h4>
            <h4>Blog</h4>
            <div className='flex items-center gap-1'>
                <h4>Pages</h4>
                <i class="ri-arrow-down-s-line"></i>
            </div>
            <button className='border pt-2 pb-2 pl-6 pr-6 rounded-3xl'>Get in Touch</button>
           
        </div>
        
      
    </div>
  )
}

export default Navbar

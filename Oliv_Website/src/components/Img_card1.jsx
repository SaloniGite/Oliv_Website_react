import React from 'react'

const Img_card1 = (props) => {
  return (
    <div className='h-[32vw] w-[45vw]'>
      <div className='h-[27vw] w-full  object-cover overflow-hidden'>
        <img src={props.image} alt="" />
      </div>
      <div className=' flex justify-between items-center'>
        <h3>{props.footer} </h3>
       <div className='p-3'>
       <button className='border px-6 rounded-3xl py-2 bg-white text-black hover:bg-black hover:text-white'>{props.button_content}</button>
       </div>
      </div>
    </div>
  )
}

export default Img_card1

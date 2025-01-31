import React from 'react'

const Cards = (props) => {
  return (
    <div className='h-[22vw] w-[18vw] bg-gray-100 px-12 py-14'>
      <div >
      <h3 className='text-3xl font-light pb-4'>{props.heading}</h3>
      <div className='text-xl font-light text-gray-500 pb-8'>
      {props.matter}
      </div>
      <h5 >{props.footer}</h5>
      </div>
    </div>
  )
}

export default Cards

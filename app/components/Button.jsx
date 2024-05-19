import React from 'react'

const Button = ({text}) => {
  return (
    <div className=' text-sm px-4 py-2 cursor-pointer flex items-center justify-center bg-gray-800 rounded-xl hover:bg-gray-600 transition'>{text}</div>
  )
}

export default Button
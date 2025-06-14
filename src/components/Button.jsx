import React from 'react'

const Button = ({onClick,children}) => {
  return (
    <button className='px-3 py-2 bg-blue-500 rounded-lg text-white hover:cursor-pointer hover:bg-blue-600 transition-colors ease-in' onClick={onClick}>{children}</button>
  )
}

export default Button
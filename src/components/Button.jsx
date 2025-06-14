import React from 'react'

const Button = ({onClick,className,children}) => {
  return (
    <button className={`${className} hover:cursor-pointer transition-colors ease-in`} onClick={onClick}>{children}</button>
  )
}

export default Button
import React, { FC } from 'react'

interface ButtonProps {
    children: React.ReactNode,
    addClass?: string
}

const Button: FC<ButtonProps> = ({children, addClass}) => {
  return (
    <button className={('bg-blue-950 text-white py-5 rounded-full hover:bg-red-950 duration-300  ') + addClass}>
        {children}
    </button>
  )
}

export default Button
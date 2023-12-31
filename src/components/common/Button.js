import React from 'react'

const Button = ({ className = 'h-11 w-[160px] text-white', text }) => {
    return <button className={`${className} bg-primary rounded-full text-sm`}>{text}</button>
}

export default Button
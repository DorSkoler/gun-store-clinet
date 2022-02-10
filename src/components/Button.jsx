import React from 'react'

export const Button = ({index,text,onClick}) => {
  return (
    <div
    className="cursor-pointer bg-black p-3 px-5 w-max mt-1 rounded-3xl shadow-2xl hover:bg-opacity-60 transition-all duration-50"
    onClick={() => onClick(index,text)}
  >
    <p className="text-[#37c7da] font-bold">{text}</p>
  </div>
  )
}

export default Button
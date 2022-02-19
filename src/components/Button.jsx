import React from 'react'

export const Button = ({index,number,text,onClick,trainingObject}) => {
  return (
    <div
    className="cursor-pointer bg-black mb-1 p-3 px-5 w-4/5 mt-1 rounded-3xl shadow-2xl hover:bg-opacity-60 transition-all duration-50"
    onClick={() => onClick(index,text,trainingObject)}
  >
    <p className="text-pink-500 font-bold">{number} X {text}</p>
  </div>
  )
}

export default Button
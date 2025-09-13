import React from 'react'

const Button = ({color, bgColor, borderRadius,bgHoverColor, text, size}) => {
  return (
    <button
    type='button'
    style={{color, backgroundColor: bgColor, borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-2xl hover:bg-${bgHoverColor}`}>
      {text}
    </button>
  )
}

export default Button
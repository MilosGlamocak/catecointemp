import React from 'react'
import '../styles/MenuButton.css'

function MenuButton({text, bgColor, color, borderColor, onClick}) {
  return (
    <div style={{backgroundColor: bgColor, color, borderColor}} className='menuBtn' onClick={onClick}>
        <p>{text}</p>
    </div>
  )
}

export default MenuButton
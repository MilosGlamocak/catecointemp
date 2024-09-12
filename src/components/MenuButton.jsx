import React from 'react'
import '../styles/MenuButton.css'

function MenuButton({text, bgColor, color, borderColor}) {
  return (
    <div style={{backgroundColor: bgColor, color, borderColor}} className='menuBtn'>
        <p>{text}</p>
    </div>
  )
}

export default MenuButton
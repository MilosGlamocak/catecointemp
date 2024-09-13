import React from 'react'
import '../styles/SecondPage.css'

function SecondPage() {
  return (
    <div className='secondPageCont'>
        <div className='secondPageHeaderCont'>
            <img src="https://www.blubsui.com/t-blub.png" alt="blubsui" />
            <h1>In $BLUB, we always calculate billion-dollar conversions</h1>
        </div>
        <div className='calculateDiv'>
            <small>Insert</small>
            <input type="number" />
            <h2>$BLUB</h2>
        </div>
    </div>
  )
}

export default SecondPage
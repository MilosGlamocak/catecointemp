import React from 'react'
import '../styles/SecondPage.css'

function SecondPage() {
  return (
    <div className='secondPageCont'>
        <div className='secondPageHeaderCont'>
            <img src="https://www.blubsui.com/t-blub.png" alt="blubsui" />
            
        </div>
        <div className='calculateCont'>
            <h1>In $BLUB, we always calculate billion-dollar conversions</h1>
            <div className='calculateDiv'>
                <small>Insert</small>
                <input type="number" />
                <h2>$BLUB</h2>
            </div>
            <div className='resultDiv'>
                <h2>Value in Dollars:</h2>
                <p>$43875</p>
                <h3>This is what you'll have when $BLUB
                hits $1 BILLION. It's going to happen.</h3>
            </div>
        </div>
        
    </div>
  )
}

export default SecondPage
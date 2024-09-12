import React from 'react'
import '../styles/WelcomePage.css'
import MenuButton from './MenuButton'

function WelcomePage() {

    const buttons = ['HOME', 'TOKENOMICS', 'LEADERBOARD', 'BUY', 'CHART'];

  return (
    <div className='welcomePageCont'>
        <div className='logoDiv'>
            <h1 className='logo'>BLUB</h1>
        </div>
        <div className='menuBtns'>
            {buttons.map((b) => {
                return <MenuButton text={b} key={b}/>
            })}
        </div>
    </div>
  )
}

export default WelcomePage
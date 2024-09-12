import React from 'react'
import '../styles/WelcomePage.css'
import MenuButton from './MenuButton'
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';

function WelcomePage() {

    const buttons = ['HOME', 'TOKENOMICS', 'LEADERBOARD', 'BUY', 'CHART'];

  return (
    <div className='welcomePageCont'>
        <div className='logoDiv'>
            <img src="https://www.blubsui.com/dd.png" alt="logo" className='logo'/>
        </div>
        <div className='menuBtns'>
            {buttons.map((b) => {
                return <MenuButton text={b} key={b}/>
            })}
        </div>
        <div className='logoBig'>
            <img src="https://www.blubsui.com/ccc.png" alt="logoBig" />
            <h1>A Dirty Fish in the Waters of the Sui Ocean</h1>
        </div>
        <img src="https://www.blubsui.com/bubbles.png" alt="bubbles" className='mainDecoration'/>
        <div className='welcomeContactDiv'>
            <div className='welcomeContactIcon'><XIcon /></div>
            <div className='welcomeContactIcon'><TelegramIcon /></div>
        </div>
        <div className='leftDecoration'>
            <img src="https://www.blubsui.com/tesouro.png" alt="decoration" />
        </div>
    </div>
  )
}

export default WelcomePage
import React from 'react'
import '../styles/Trading.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';

function Trading() {
  return (
    <div className='tradingCont'>
        <h2>$BLUB available for trading in Sui</h2>
        <div className='tradingBtns'>
            <div className='tradingBtn'>
                <img src="https://www.blubsui.com/cetus.png" alt="cetus" />
            </div>
            <div className='tradingBtn'>
                <img src="https://www.blubsui.com/hop.jpg" alt="hop" />
            </div>
            <div className='tradingBtn'>
                <img src="https://www.blubsui.com/turbos.webp" alt="turbos" />
            </div>
        </div>
        <div className='bottomContact'>
            <div className='bottomContactIcon'><XIcon /></div>
            <div className='bottomContactIcon'><TelegramIcon /></div>
        </div>
    </div>
  )
}

export default Trading
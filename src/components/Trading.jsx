import React from 'react'
import '../styles/Trading.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';

function Trading() {
  return (
    <div className='tradingCont'>
        <h2>$BLUB available for trading in Sui</h2>
        <div className='tradingBtns'>
            <a className='tradingBtn' href='https://app.cetus.zone/swap?from=0x2::sui::SUI&to=0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB' target='_blank'>
                <img src="https://www.blubsui.com/cetus.png" alt="cetus" />
            </a>
            <a className='tradingBtn' href='https://hop.ag/swap/SUI-BLUB?ref=blub' target='_blank'>
                <img src="https://www.blubsui.com/hop.jpg" alt="hop" />
            </a>
            <a className='tradingBtn' href='https://app.turbos.finance/#/trade?input=0x2::sui::SUI&output=0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB' target='_blank'>
                <img src="https://www.blubsui.com/turbos.webp" alt="turbos" />
            </a>
        </div>
        <div className='bottomContact'>
            <div className='bottomContactIcon'><XIcon /></div>
            <div className='bottomContactIcon'><TelegramIcon /></div>
        </div>
    </div>
  )
}

export default Trading
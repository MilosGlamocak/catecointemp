import React, { forwardRef } from 'react';
import '../styles/WelcomePage.css';
import MenuButton from './MenuButton';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';

const WelcomePage = forwardRef(({ scrollToSection }, ref) => {
  const buttons = ['HOME', 'TOKENOMICS'];

  const handleScroll = (section) => {
    if (scrollToSection) scrollToSection(section);
  };

  return (
    <div className='welcomePageCont' ref={ref}>
      <div className='welcomeTopFlex'>
        <div className='logoDiv'>
          <img src="https://cateoneth.com/assets/img/hero-illustration.png" alt="logo" className='logo' />
        </div>
        <div className='menuBtns'>
          {buttons.map((b) => (
            <MenuButton 
              text={b} 
              key={b}
              onClick={() => handleScroll(b)}
            />
          ))}
          <a className='welcomeOuterUrl' href="https://hop.ag/swap/SUI-BLUB?ref=blub" target='_blank' rel='noopener noreferrer'>
            <MenuButton text={"BUY"} color="orange" bgColor={"white"} />
          </a>
          <a className='welcomeOuterUrl' href="https://birdeye.so/token/0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB?chain=sui" target='_blank' rel='noopener noreferrer'>
            <MenuButton text={"CHART"} color="orange" bgColor={"white"} />
          </a>
        </div>
      </div> 
      <div className='logoBig'>
        <img src="https://cateoneth.com/assets/img/hero-illustration.png" alt="logoBig" />
        <h1>A Dirty Fish in the Waters of the Sui Ocean</h1>
      </div>
      <img src="https://www.blubsui.com/bubbles.png" alt="bubbles" className='mainDecoration' />
      <div className='welcomeContactDiv'>
        <a className='welcomeContactIcon' target='_blank' rel='noopener noreferrer' href='https://x.com/blubsui'><XIcon /></a>
        <a className='welcomeContactIcon' target='_blank' rel='noopener noreferrer' href='https://t.me/blubsui'><TelegramIcon /></a>
      </div>
      <div className='leftDecoration'>
        <img src="https://www.blubsui.com/tesouro.png" alt="decoration" />
      </div>
    </div>
  );
});

export default WelcomePage;

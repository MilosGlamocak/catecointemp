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
      <div className='topNav'>
        <img src="https://cateoneth.com/assets/img/logo.png" alt="logo" className='logoSmall'/>
        <div className='navBtnsDiv'>
          <a href="" className='headerBtn btn'>BUY CATE</a>
          <button className='headerBurger btn'>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className='headerNav btn'>
            <a href="#home">Home</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#how-to-buy">How to buy?</a>
          </nav>
        </div>
      </div>
      <img src="https://cateoneth.com/assets/img/hero-illustration.png" alt="cateWelcome" className='cateWelcome'/>
    </div>
  );
});

export default WelcomePage;

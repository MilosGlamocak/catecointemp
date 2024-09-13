import React, { useRef } from 'react';
import './App.css';
import FAQ from './components/FAQ';
import SecondPage from './components/SecondPage';
import Tokenomics from './components/Tokenomics';
import Trading from './components/Trading';
import WelcomePage from './components/WelcomePage';

function App() {
  const homeRef = useRef(null);
  const tokenomicsRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'HOME' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'TOKENOMICS' && tokenomicsRef.current) {
      tokenomicsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="appCont">
      <WelcomePage scrollToSection={scrollToSection} ref={homeRef}/>
      <SecondPage/>
      <Tokenomics ref={tokenomicsRef} />
      <FAQ />
      <Trading />
    </div>
  );
}

export default App;

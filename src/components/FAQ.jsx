import React, { useEffect } from 'react';
import '../styles/FAQ.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function FAQ() {

  useEffect(() => {
    const replaceText = (selector, wordsToReplace) => {
      const element = document.querySelector(selector);
      if (element) {
        let html = element.innerHTML;

        wordsToReplace.forEach(({ word, className }) => {
          const regex = new RegExp(`(${word})`, 'gi');  // Case-insensitive matching
          html = html.replace(regex, `<span class="${className}">$1</span>`);
        });

        element.innerHTML = html;
      }
    };

    replaceText('.faqDiv', [
      { word: '\\$BLUB', className: 'blueText' },  // Escaped $ sign
      { word: 'Sui Ocean', className: 'lightBlueText' },
      { word: 'Sui Network', className: 'lightBlueText' },
      { word: '\\$PEPE', className: 'greenText' },  // Escaped $ sign
    ]);
  }, []);

  return (
    <div className='faqCont'>
        <div className='faqDiv'>
            <img src="https://www.blubsui.com/raivaa-min.png" alt="whale" className='whale'/>
            <h2 className='faqHeader'>FAQ</h2>
            <h3>Why is $BLUB a success?</h3>
            <p>$BLUB is the funniest and most degenerate fish in the Sui Ocean, staying true to its origins and bringing the chaotic energy of the 'Boy's Club'—the creators of $PEPE—to the Sui Network. With its dirty and clumsy manner, $BLUB causes real chaos in the coral.</p>
            <p>It brings a unique theme and perfect synergy with the Sui Network, making it an irresistible crypto for those who love memes and aspire to conquer oceans and achieve dreams.</p>
            <div className='divider'></div>
            <h3>Coin-Type</h3>
            <div className='coinTypeDiv'>
                <p>0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB</p>
                <a href="https://suivision.xyz/coin/0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB" target='_blank'><OpenInNewIcon /></a>
            </div>
        </div>
    </div>
  );
}

export default FAQ;

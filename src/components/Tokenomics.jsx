import React, { forwardRef } from 'react';
import '../styles/Tokenomics.css';

const Tokenomics = forwardRef((props, ref) => {
  return (
    <div className='tokenomicsCont' ref={ref}>
      <img src="https://www.blubsui.com/shit-min.png" alt="shit" className='shit'/>
      <div>
        <h2>$TOKENOMICS</h2>
        <h3>TOKEN SUPPLY</h3>
        <h4>420.690.000.000.000 $BLUB</h4>
        <p>(420,690 T)</p>
      </div>
      <div className='tokenomicsDiv'>
        <div className='fact'>
          <h2>75%</h2>
          <p>PL (CEX & DEX)</p>
        </div>
        <div className='fact'>
          <h2>10%</h2>
          <p>GROWTH (MKT & MIDIA)</p>
        </div>
        <div className='fact'>
          <h2>15%</h2>
          <p>CONTRIBUTORS *</p>
        </div>
        <p className='hint'>* Vested linearly over 3 years starting June 29th, 2024.</p>
      </div>
    </div>
  );
});

export default Tokenomics;

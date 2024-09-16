import React, { forwardRef } from 'react';
import '../styles/Tokenomics.css';

const Tokenomics = forwardRef((props, ref) => {
  return (
    <div className='tokenomicsCont' ref={ref}>
      <div className='tokenomicsDiv'>
        <h2 className='tokenomicsTitle'>TOKENOMICS</h2>
      </div>
    </div>
  );
});

export default Tokenomics;

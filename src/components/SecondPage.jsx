import React, { useState } from 'react';
import '../styles/SecondPage.css';

function SecondPage() {

    let [blub, setBlub] = useState(33329748040);

    function changeBlub (e) {
        setBlub(e.target.value);
    }

    function formatNumber(value) {
        return (Math.floor(value / 2104) / 100).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    return (
        <div className='secondPageCont'>
            <div className='calculateCont'>
            <div className='secondPageHeaderCont'>
                <img src="https://www.blubsui.com/t-blub.png" alt="blubsui" />
            </div>
                <h1>In $BLUB, we always calculate billion-dollar conversions</h1>
                <div className='calculateDiv'>
                    <small>Insert</small>
                    <input type="number" onChange={changeBlub} />
                    <h2>$BLUB</h2>
                </div>
                <div className='resultDiv'>
                    <h2>Value in Dollars:</h2>
                    <p>${formatNumber(blub)}</p>
                    <h3>This is what you'll have when $BLUB hits $1 BILLION. It's going to happen.</h3>
                </div>
            </div>
        </div>
    );
}

export default SecondPage;

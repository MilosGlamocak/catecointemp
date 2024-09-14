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
            
        </div>
    );
}

export default SecondPage;

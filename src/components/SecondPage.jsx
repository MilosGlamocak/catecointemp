import React, { useState } from 'react';
import '../styles/SecondPage.css';

function SecondPage() {

    return (
        <div className='secondPageCont'>
            <img src="https://cateoneth.com/assets/img/about-left.svg" alt="aboutLeft" className='aboutLeftImg absoluteAboutImg'/>
            <img src="https://cateoneth.com/assets/img/about-right.svg" alt="aboutRight" className='aboutRightImg absoluteAboutImg'/>
            <div className='aboutText'>
                <div className='secondPageHeader'>
                    <img src="https://cateoneth.com/assets/img/about-decor-left.png" alt="aboutDecorLeft" className='aboutDecorLeft'/>
                    <h1 className='heroTitle'>ABOUT</h1>
                    <img src="https://cateoneth.com/assets/img/about-decor-right.png" alt="aboutDecorRight" className='aboutDecorRight'/>       
                </div>
                <p>Introducing CATE: The Original Companion of Kabosu's Family</p>
                <p>Meet CATE, the pioneering pet of Atsuko Sato, affectionately known as "Kabosu Mama." Before the world fell in love with Kabosu, the iconic Shiba Inu behind the "Doge" meme, there was CATE, the feline trailblazer in the heart of the Sato household.</p>
                <p>CATE isn't just any cat; this legendary meme feline has been the best friend to the famous $DOGE and now extends a paw of friendship to $NEIRO. With an adventurous spirit and a charm that's simply irresistible, CATE has leaped onto the Ethereum blockchain, ready to etch its paw prints into the annals of crypto history.</p>
                <p>Join CATE on this exciting journey, as this whiskered wonder explores new territories in the digital world, bringing joy, memes, and a touch of feline finesse to the blockchain. Whether you're here for the memes, the community, or the crypto, CATE welcomes you with a purr and a playful nudge into the future of internet culture.</p>
            </div>
            <img src="https://cateoneth.com/assets/img/about-illustration.jpg" alt="aboutImg" />
        </div>
    );
}

export default SecondPage;

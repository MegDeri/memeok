import React from 'react';
import Face from '../images/face.png'

function Header() {
    return (
        <header>
            <img 
            src={Face} 
            className='logo' 
            alt='where?' />
            <p>Hi, I am a header for Meme Generator</p>
        </header>
        
    )
}

export default Header;
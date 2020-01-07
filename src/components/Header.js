import React from 'react';
import Face from '../images/face.png'

function Header() {
    return (
        <div>
            <img src={Face} className='logo' width='300px' height='250px' alt='where?' />
            <h1>Hi, I am a header for Meme Generator</h1>
        </div>
        
    )
}

export default Header;
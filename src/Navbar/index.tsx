import React from 'react';
import './index.css';

const Navbar: React.FC = () => {
    return (
        <nav>
            <a href="/" className='home'>
                <img src="src/assets/logo.png" height={35} alt="Logo"></img>
                <h1>ExamBank</h1>
            </a>

            <a href="/profile-page" className='profile' >
                <img src="src/assets/profile-circle.svg" height={40} alt="Profile"></img>
            </a >
        </nav>
    );
};

export default Navbar;
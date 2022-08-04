import React from 'react';
import { BsShieldLock } from 'react-icons/bs';
// import Sqrs from './squares';
import './logo.css';

function Logo() {
    return (
        <div className='logo'>
            <BsShieldLock className='logo-lock' />
            <h1>Signum</h1>
            {/* <Sqrs /> */}
        </div>
    )
}

export default Logo
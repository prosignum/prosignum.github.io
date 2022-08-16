import React from 'react';
import { FaCogs } from 'react-icons/fa';

function SettingFrame( { component1, component2, component3 } ) {
    return (
        <div className='inout-container inout-settings'>
            <div className='inout-icon'>
                <FaCogs />
            </div>
            <form className='inout-content'>
                {component1}
                {component2}
                {component3}
            </form>
            <div className='inout-title'>
                <h2><span className='highlight-word'>Settings</span></h2>
            </div>
        </div>
    )
}

export default SettingFrame
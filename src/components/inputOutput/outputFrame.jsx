import React from 'react';
import { BsTextLeft } from 'react-icons/bs';
import './inputOutput.css';

function OutputFrame( {component} ) {
  return (
        <div className='inout-container'>
            <div className='inout-icon'>
                <BsTextLeft />
            </div>
            <div className='inout-content'>
                {component}
            </div>
            <div className='inout-title'>
                <h2><span className='highlight-word'>Output</span></h2>
            </div>
        </div>
    )
}

export default OutputFrame
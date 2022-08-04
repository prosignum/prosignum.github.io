import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import './inputOutput.css';

function InputFrame( { component } ) {
  return (
        <div className='inout-container'>
            <div className='inout-icon'>
                <BsFillPencilFill />
            </div>
            <div className='inout-content'>
                {component}
            </div>
            <div className='inout-title'>
                <h2><span className='highlight-word'>Input</span></h2>
            </div>
        </div>
    )
}

export default InputFrame
import React from 'react';
import './inputOutput.css';

function OutputForm( { sendData } ) {
    return (
        <div className='output'>
            <div className='output-content outputs'>
                {sendData}
            </div>
        </div>
    )
}

export default OutputForm
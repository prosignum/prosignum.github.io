import React, { useState } from 'react';
import { GiCombinationLock } from 'react-icons/gi';
import { BsKeyFill } from 'react-icons/bs';
import './enDeBtn.css';

function EnDeBtn({ toggleDecrypt }) {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
        toggleDecrypt();
    }

    return (
        <div className='ende-container'>
            <input id='ende-checkbox' className='ende-checkbox' type="checkbox" onChange={handleCheck} />
            <label htmlFor='ende-checkbox' className='ende-label'>
                <span><small>ENCRYPT</small></span>
                <span><small>DECRYPT</small></span>
                <span className={checked ? 'ende-indicator active' : 'ende-indicator'}>
                    {
                        checked ? <BsKeyFill /> : <GiCombinationLock />
                    }
                </span>
            </label>
        </div>
    )
}

export default EnDeBtn
import React, { useState, useEffect } from 'react';
import './rotSlider.css';

function RotSlider( { getCipher } ) {

  const [rot, setRot] = useState(13);

  const rotCipher = (e) => {
    setRot(e.target.value);
  }

  const sendRot = (data) => {
    getCipher(data);
  }

  useEffect(() => {
    sendRot(rot);
  }, [rot])

  return (
    <div className='cipher-container'>
      <div className='rot-cipher-container'>
        <div className='rot-info'>
          <h3>ROT - <span className='highlight-word'>{rot}</span></h3>
        </div>
        <input className='rot-slider' type='range' min={1} max={25} defaultValue={rot} onChange={rotCipher} />
      </div>
    </div>
  )
}

export default RotSlider
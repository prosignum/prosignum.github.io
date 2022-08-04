import React from 'react';
import InputFrame from '../inputOutput/inputFrame';
import OutputFrame from '../inputOutput/outputFrame';
import SettingFrame from '../inputOutput/settingFrame';
import './frequency.css';

function Frequency() {
    return (
        <section className='frequeny-container'>
        <div className='title-container-frequency'>
          <h1>Frequency Analysis</h1>
        </div>
        <div className='frequency-inout'>
          <InputFrame />
          <SettingFrame />
          <OutputFrame />
        </div>
      </section>
    )
}

export default Frequency
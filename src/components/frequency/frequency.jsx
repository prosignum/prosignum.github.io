import React, { useState } from 'react';
import InputFrame from '../inputOutput/inputFrame';
import OutputFrame from '../inputOutput/outputFrame';
import SettingFrame from '../inputOutput/settingFrame';
import InputForm from '../inputOutput/inputForm';
import OutputForm from '../inputOutput/outputForm';
import './frequency.css';

function Frequency() {
  /*-----------------------------*/
  /*---- Declaring variables ----*/
  /*-----------------------------*/
  const [inputTxt, setInputTxt] = useState('');
  const [outputTxt, setOutputTxt] = useState('');
  // Variables for paste button functionality
  const [pasteItem, setPasteItem] = useState('');
  const [pasted, setPasted] = useState(false);    

  /*------------------------------------------------------------------------*/
  /*---- Get data for the inputTxt. Function is passed to <inputForm /> ----*/
  /*------------------------------------------------------------------------*/
  const getData = (data) => {
    setInputTxt(data);
  }

  /*-------------------------------------------------------------*/
  /*---- Get paste data. Function is passed to <CopyPaste /> ----*/
  /*-------------------------------------------------------------*/
  const getPaste = (data) => {
    // We set data as pasted item and after that set as inputTxt
    setPasteItem(data);
    setInputTxt(pasteItem);
    // Set pasted as true, which fills inputForm textarea with paste text
    setPasted(true);
  } 

  return (
    <section className='frequeny-container'>
      <div className='title-container-frequency'>
        <h1>Frequency Analysis</h1>
      </div>
      <div className='frequency-inout'>
        <InputFrame component={<InputForm getData={getData} pasted={pasted} pasteItem={pasteItem} />} />
        <SettingFrame />
        <OutputFrame component={<OutputForm sendData={outputTxt} />} />
      </div>
    </section>
  )
}

export default Frequency
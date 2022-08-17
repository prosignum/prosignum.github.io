import React, { useState, useEffect } from 'react';
import InputFrame from '../inputOutput/inputFrame';
import OutputFrame from '../inputOutput/outputFrame';
import SettingFrame from '../inputOutput/settingFrame';
import AnalysisFrame from '../inputOutput/analysisFrame';
import AnalysisOutput from '../inputOutput/analysisOutput';
import InputForm from '../inputOutput/inputForm';
import OutputForm from '../inputOutput/outputForm';
import CopyPaste from '../buttons/copyPaste';
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

  useEffect(() => {
    setOutputTxt(inputTxt);
  }, [inputTxt])

  return (
    <section className='frequeny-container'>
      <div className='title-container-frequency'>
        <h1>Frequency Analysis</h1>
      </div>
      <div className='frequency-inout'>
        <InputFrame component={<InputForm getData={getData} pasted={pasted} pasteItem={pasteItem} />} />
        <OutputFrame component={<OutputForm sendData={outputTxt} />} />
        <AnalysisFrame component={<AnalysisOutput />} />
        <SettingFrame
          component1={<CopyPaste getPaste={getPaste} outputTxt={outputTxt} />}
        />

      </div>
    </section>
  )
}

export default Frequency
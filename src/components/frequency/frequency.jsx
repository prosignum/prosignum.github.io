import React, { useState, useEffect } from 'react';
import InputFrame from '../inputOutput/inputFrame';
import OutputFrame from '../inputOutput/outputFrame';
import SettingFrame from '../inputOutput/settingFrame';
import AnalysisFrame from '../inputOutput/analysisFrame';
import AnalysisOutput from '../inputOutput/analysisOutput';
import InputForm from '../inputOutput/inputForm';
import OutputForm from '../inputOutput/outputForm';
import CopyPaste from '../buttons/copyPaste';
import LetterFreq from '../buttons/letterFreq';
import './frequency.css';

function Frequency() {
  /*-----------------------------*/
  /*---- Declaring variables ----*/
  /*-----------------------------*/
  const [inputTxt, setInputTxt] = useState('');
  const [outputTxt, setOutputTxt] = useState('');
  const [analysisResult, setAnalysisResult] = useState([]);
  const [lettersTotal, setLettersTotal] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  // Another way to make an array of alphabets
  const alphabets = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
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

  const analyzeFrequency = (text) => {
    const analyzedData = [];
    let maxValue = 0;
    let count = 0;

    for (let i = 0; i < alphabets.length; i++) {
      analyzedData.push([alphabets[i], 0]);
    }

    for (let x = 0; x < text.length; x++) {
      if (alphabets.includes(text[x].toUpperCase())) {
        for (let y = 0; y < analyzedData.length; y++) {
          if(analyzedData[y][0] === text[x].toUpperCase()) {
            analyzedData[y][1] += 1;
            count ++;
          }
        }
      }
    }

    for (let z = 0; z < analyzedData.length; z++) {
      if (analyzedData[z][1] > maxValue) {
        maxValue = analyzedData[z][1];
      }
    }
    setAnalysisResult(analyzedData);
    setLettersTotal(count);
    setMaxValue(maxValue);
  }

  const analyzeText = () => {
    analyzeFrequency(inputTxt);
  }

  useEffect(() => {
    setOutputTxt(inputTxt);
  }, [inputTxt, pasted])

  return (
    <section className='frequeny-container'>
      <div className='title-container-frequency'>
        <h1>Frequency Analysis</h1>
      </div>
      <div className='frequency-inout'>
        <InputFrame component={<InputForm getData={getData} pasted={pasted} pasteItem={pasteItem} />} />
        <OutputFrame component={<OutputForm sendData={outputTxt} />} />
        <SettingFrame
          component1={<CopyPaste getPaste={getPaste} outputTxt={outputTxt} />}
          component3={<LetterFreq analyze={analyzeText} />}
        />
        <AnalysisFrame component={<AnalysisOutput analysisResult={analysisResult} lettersTotal={lettersTotal} maxValue={maxValue} />} />
      </div>
    </section>
  )
}

export default Frequency
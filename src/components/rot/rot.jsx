import React, { useState, useEffect, useRef } from 'react';
import InputFrame from '../inputOutput/inputFrame';
import OutputFrame from '../inputOutput/outputFrame';
import SettingFrame from '../inputOutput/settingFrame';
import InputForm from '../inputOutput/inputForm';
import OutputForm from '../inputOutput/outputForm';
import CopyPaste from '../buttons/copyPaste';
import Sqrs from '../logo/squares';
import RotSlider from '../buttons/rotSlider';
import EnDeBtn from '../buttons/enDeBtn';
import './rot.css';

function Rot() {

  /*-----------------------------*/
  /*---- Declaring variables ----*/
  /*-----------------------------*/
  const [inputTxt, setInputTxt] = useState('');
  const [outputTxt, setOutputTxt] = useState('');
  const [cipher, setCipher] = useState(13);
  const [decrypt, setDecrypt] = useState(false);
  // Another way to make an array of alphabets
  const alphabets = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
  // Declaring useRef hook
  const alphabetRef = useRef();
  // And set alphabets as useRef hook to avoid ESLint 'react-hooks/exhaustive-deps'-warning
  alphabetRef.current = [...alphabets, ...alphabets];
  // Just to avoid ESLint warnings
  const refEncryptDecrypt = useRef();
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

  /*---------------------------------------------*/
  /*---- Get cipher rotation from <Cipher /> ----*/
  /*---------------------------------------------*/
  const getCipher = (data) => {
    setCipher(data);
  }

  /*-------------------------------------------------------------------*/
  /*---- Toggle between Decryption and Encryption from <EnDeBtn /> ----*/
  /*-------------------------------------------------------------------*/
  const toggleDecrypt = () => {
    setDecrypt(!decrypt);
  }

  /*-----------------------------------*/
  /*---- Handle and set encryption ----*/
  /*-----------------------------------*/
  const setEncryptDecrypt = () => {
    const data = inputTxt.split('');
    const rotation = cipher;
    let returnData = '';
    let alphabets;

    if (!decrypt) {
      alphabets = alphabetRef.current;
    }
    else {
      alphabets = alphabetRef.current.reverse();
    }

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (alphabets.includes(data[i].toUpperCase())) {
          const spot = alphabets.indexOf(data[i].toUpperCase());
          const newAlphabets = alphabets.slice(spot);
          
          data[i] === data[i].toUpperCase() ? data[i] = newAlphabets[rotation] : data[i] = newAlphabets[rotation].toLowerCase();
          returnData += data[i]
        }
        else {
          returnData += data[i]
        }
      }
    }
    return returnData;
  }

  // To avoid ESLint warnings. Not a JS or React problem... It would work without useREf variable
  refEncryptDecrypt.current = setEncryptDecrypt();

  /*------------------------------------------------------------------*/
  /*---- UseEffect-hook is called when inputTxt or cipher changes ----*/
  /*------------------------------------------------------------------*/
  useEffect(() => {
    const output = refEncryptDecrypt.current;

    // Set data to the OutputTxt
    setOutputTxt(output);
    setPasted(false);
  }, [inputTxt, cipher, pasted, decrypt])

  /*---------------------*/
  /*---- Return View ----*/
  /*---------------------*/
  return (
    <section className='rot-container'>
      <div className='title-container-rot'>
        <h1>ROT-{cipher}</h1>
        <Sqrs />
      </div>
      <div className='rot-inout'>
        <InputFrame component={<InputForm getData={getData} pasted={pasted} pasteItem={pasteItem} />} />
        <SettingFrame
          component={<CopyPaste getData={getData} getPaste={getPaste} outputTxt={outputTxt} />}
          component2={<RotSlider getCipher={getCipher} />}
          component3={<EnDeBtn toggleDecrypt={toggleDecrypt} />} 
        />
        <OutputFrame component={<OutputForm sendData={outputTxt} />} />
      </div>
    </section>
  )
}

export default Rot
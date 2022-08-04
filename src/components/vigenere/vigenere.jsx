import React, { useState, useEffect, useRef } from 'react';
import InputFrame from '../inputOutput/inputFrame';
import OutputFrame from '../inputOutput/outputFrame';
import SettingFrame from '../inputOutput/settingFrame';
import InputForm from '../inputOutput/inputForm';
import OutputForm from '../inputOutput/outputForm';
import CopyPaste from '../buttons/copyPaste';
import Keyword from '../buttons/keyword';
import EnDeBtn from '../buttons/enDeBtn';
import Sqrs from '../logo/squares';
import './vigenere.css';

function Vigenere() {

  const [inputTxt, setInputTxt] = useState('');
  const [outputTxt, setOutputTxt] = useState('');
  const [keyword, setKeyword] = useState('');
  // Another way to make an array of alphabets
  const mainAlphabets = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
  // Declaring useRef hook
  const alphabetRef = useRef();
  // And set alphabets as useRef hook to avoid ESLint 'react-hooks/exhaustive-deps'-warning
  alphabetRef.current = [...mainAlphabets, ...mainAlphabets];
  // Variables for paste button functionality
  const [pasteItem, setPasteItem] = useState('');
  const [pasted, setPasted] = useState(false);
  const refEncryptDecrypt = useRef();

  const [decrypt, setDecrypt] = useState(false);

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

  const getKeyword = (data) => {
    setKeyword(data);
  }

  const setEncryptDecrypt = () => {
    const data = inputTxt.split('');
    let alphabets = alphabetRef.current;
    let output = '';
    let counter = 0;

    if(decrypt) {
      alphabets = alphabets.reverse();
    }

    if (keyword.length > 0 && inputTxt.length > 0) {
    
      for (let i = 0; i < data.length; i++) {
        if (alphabets.includes(data[i].toUpperCase())) {
          
          if (counter === keyword.length) {
            counter = 0;
          }
          let keywordSpot = alphabets.indexOf(keyword[counter].toUpperCase());
          let textSpot = alphabets.indexOf(data[i].toUpperCase());

          if (decrypt) {
            keywordSpot = alphabets.reverse().indexOf(keyword[counter].toUpperCase());
            textSpot = alphabets.reverse().indexOf(data[i].toUpperCase());
          }

          data[i] === data[i].toUpperCase() ?
            data[i] = alphabets[textSpot + keywordSpot].toUpperCase()
          :
            data[i] = alphabets[textSpot + keywordSpot].toLowerCase();
          
          output += data[i]

          counter++;
        
        }
        else {
          output += data[i];
        }
      } 
      return output;
    }
  }

  const toggleDecrypt = () => {
    setDecrypt(!decrypt);
  }

  refEncryptDecrypt.current = setEncryptDecrypt();

  useEffect(() => {
    const output = refEncryptDecrypt.current;


      setOutputTxt(output);
      setPasted(false);


  }, [keyword, inputTxt, pasted, decrypt])

  return (
    <section className='vigenere-container'>
      <div className='title-container-vigenere'>
        <h1>VIGENÈRE</h1>
        <Sqrs />
      </div>
      <div className='vigenere-inout'>
        <InputFrame component={<InputForm getData={getData} pasted={pasted} pasteItem={pasteItem} />} />
        <SettingFrame
          component={<CopyPaste getData={getData} getPaste={getPaste} outputTxt={outputTxt} />}
          component2={<Keyword getKeyword={getKeyword} />}
          component3={<EnDeBtn toggleDecrypt={toggleDecrypt} />}
        />
        <OutputFrame component={<OutputForm sendData={outputTxt} />} />
      </div>
    </section>
  )
}

export default Vigenere
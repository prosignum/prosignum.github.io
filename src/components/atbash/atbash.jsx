import React, { useState, useEffect, useRef } from 'react';
import InputFrame from '../inputOutput/inputFrame';
import OutputFrame from '../inputOutput/outputFrame';
import SettingFrame from '../inputOutput/settingFrame';
import InputForm from '../inputOutput/inputForm';
import OutputForm from '../inputOutput/outputForm';
import CopyPaste from '../buttons/copyPaste';
import Sqrs from '../logo/squares';
import './atbash.css';

function Atbash() {
    /*-----------------------------*/
    /*---- Declaring variables ----*/
    /*-----------------------------*/
    const [inputTxt, setInputTxt] = useState('');
    const [outputTxt, setOutputTxt] = useState('');
    // Another way to make an array of alphabets
    const alphabets = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
    // Declaring useRef hook
    const alphabetRef = useRef();
    // And set alphabets as useRef hook to avoid ESLint 'react-hooks/exhaustive-deps'-warning
    alphabetRef.current = alphabets;
    const refEncrypt = useRef();
    // Variables for paste button functionality
    const [pasteItem, setPasteItem] = useState('');
    const [pasted, setPasted] = useState(false);

    /*----------------------------------------------------------------------*/
    /*---- Get data for the inputTxt. Function is passed to AtbashInput ----*/
    /*----------------------------------------------------------------------*/
    const getData = (data) => {
        setInputTxt(data);
    }

    /*---------------------------------------------------------*/
    /*---- Get paste data. Function is passed to CopyPaste ----*/
    /*---------------------------------------------------------*/
    const getPaste = (data) => {
        // We set data as pasted item and after that set as inputTxt
        setPasteItem(data);
        setInputTxt(pasteItem);
        // Set pasted as true, which fills textarea with paste text
        setPasted(true);
    }

    /*------------------------------------------------*/
    /*---- Handle and set encryption / decryption ----*/
    /*------------------------------------------------*/
    const setEncryptDecrypt = () => {
        // Declaring variables
        let data = inputTxt.split('');
        let returnData = '';

        // Only executed if data length > 0
        if (data.length !== 0) {
            // Check input data and change all alphabetical characters according to atbash cipher
            for (let i = 0; i < data.length; i++) {
                // If character is in alphabets
                if (alphabetRef.current.includes(data[i].toUpperCase())) {
                    // Check the character spot in the alphabet array
                    let spot = alphabetRef.current.indexOf(data[i].toUpperCase());
                    // If original character is uppercase then it's also uppercase in the cipher text
                    // Otherwise it's set as lowercase
                    // In atbash cipher the alphabets are just reversed, so that's why here we use 'reverse' method
                    data[i] === data[i].toUpperCase() ? data[i] = alphabetRef.current.reverse()[spot] : data[i] = alphabetRef.current.reverse()[spot].toLowerCase();
                    // Add character to the string
                    returnData += data[i];
                }
                // Else, just add character to the string
                else {
                    returnData += data[i];
                }
            }
        }
        return returnData;
    }

    // To avoid ESLint warnings. Not a JS or React problem... It would work without useREf variable
    refEncrypt.current = setEncryptDecrypt();

    /*--------------------------------------------------------*/
    /*---- UseEffect-hook is called when inputTxt changes ----*/
    /*--------------------------------------------------------*/
    useEffect(() => {

        const output = refEncrypt.current;

        // Remove the last character from output, when data length is 0
        // if (data.length === 0) {
        //     returnData = '';
        // }
        // Set data to the OutputTxt
        setOutputTxt(output);
        setPasted(false);
    }, [inputTxt, pasted])

    /*---------------------*/
    /*---- Return View ----*/
    /*---------------------*/
    return (
        <section className='atbash-container'>
            <div className='title-container-atbash'>
                <h1>ATBASH</h1>
                <Sqrs />
            </div>
            <div className='atbash-inout'>
                <InputFrame component={<InputForm getData={getData} pasted={pasted} pasteItem={pasteItem} />} />
                <SettingFrame component={<CopyPaste getPaste={getPaste} outputTxt={outputTxt} />} />
                <OutputFrame component={<OutputForm sendData={outputTxt} />} />
            </div>
        </section>
    )
}

export default Atbash
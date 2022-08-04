import React from 'react';
import { useState } from 'react';
import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi';
import './copyPaste.css';

function CopyPaste({ getPaste, outputTxt }) {
  /*-----------------------------*/
  /*---- Declaring variables ----*/
  /*-----------------------------*/
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [icon, setIcon] = useState();

  /*------------------------------*/
  /*---- Paste from clipboard ----*/
  /*------------------------------*/
  const pasteFunc = async (e) => {
    // Prevent <form> element default behaviour
    e.preventDefault();

    try {
      // Get data from clipboard
      await navigator.clipboard.readText().then(
        clipText => getPaste(clipText)
      );
      // Setting variables
      setShowMessage(true);
      setIcon(<BiCheckCircle />);
      setMessage('Paste from Clipboard.')

      // Timeout to reset message
      setTimeout(() => {
        setShowMessage(false);
        setMessage('');
      }, [3000]);
      // Catch error -> Mainly happens with Firefox without clipboard extension or with Safari privacy hardening
    } catch (error) {
      setShowMessage(true);
      setIcon(<BiErrorCircle />);
      setMessage('Paste from the Clipboard failed.');

      setTimeout(() => {
        setShowMessage(false);
        setMessage('');
      }, [3000]);

      console.log('Error -> Check https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText. Also, strict privacy settings in a browser might be cause of this (eg. Safari). ', error);
    }
  }

  /*---------------------------*/
  /*---- Copy to clipboard ----*/
  /*---------------------------*/
  const copyFunc = async (e) => {
    // Prevent <form> default behaviour
    e.preventDefault();

    try {
      // Getting data from outputTxt and copying it to the clipboard
      await navigator.clipboard.writeText(outputTxt);
      setShowMessage(true);
      setIcon(<BiCheckCircle />);
      setMessage('Copy to Clipboard');

      // Timeout to reset message
      setTimeout(() => {
        setShowMessage(false);
        setMessage('');
      }, [2000])

      // Catch possible errors -> show message and console with better info
    } catch (error) {
      setShowMessage(true);
      setIcon(<BiErrorCircle />);
      setMessage('Copy to Clipboard failed.');

      // Timeout to reset message
      setTimeout(() => {
        setShowMessage(false);
        setMessage('');
      }, [2000]);

      console.log('error', error);
    }
  }

  /*----------------------*/
  /*---- Reset fields ----*/
  /*----------------------*/
  const resetFunc = (e) => {
    e.preventDefault();
    getPaste('');
  }

  /*---------------------*/
  /*---- Return View ----*/
  /*---------------------*/
  return (
    <>
      <div className='copy-paste-container'>
        <div className='copy-paste-btns'>
          <button onClick={pasteFunc} className="paste-btn">
            <span>PASTE</span>
          </button>
        </div>
        <div className='copy-paste-btns'>
          <button onClick={copyFunc} className="copy-btn">
            <span>COPY</span>
          </button>
        </div>
        <div className='copy-paste-btns'>
          <button onClick={resetFunc} className="reset-btn">
            <span>RESET</span>
          </button>
        </div>
      </div>
      <div className={showMessage ? 'copy-paste-info' : 'copy-paste-info hidden'}>
        <span>{icon}</span>
        <span>{message}</span>
      </div>
    </>
  )
}

export default CopyPaste
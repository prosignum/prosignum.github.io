import React, { useState, useRef } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import './keyword.css';

function Keyword({ getKeyword }) {
    /*-----------------------------*/
    /*---- Declaring variables ----*/
    /*-----------------------------*/
    const [keyword, setKeyword] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const refInput = useRef();
    const alphabets = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));

    /*---------------------------------------------------------------------*/
    /*---- Toggle button looks and execute prop function toggleDecrypt ----*/
    /*---------------------------------------------------------------------*/
    const changeKeyword = (e) => {
        // Prevent form default functionality
        e.preventDefault();

        // Declare variables
        const key = e.target.value;
        let word = '';
        const returnData = [];
        
        if (key.length > 0) {
            for (let i = 0; i < key.length; i++) {
                if (alphabets.includes(key[i].toUpperCase())) {
                    word += key[i].toUpperCase();
                    returnData.push(key[i]);
                }
                else {
                    setShowMessage(true);
                    setMessage('Non-alphabetical characters will be removed.')
                    setTimeout(() => {
                        setShowMessage(false);
                        setMessage('');
                    }, 4000);
                    word += ''
                }
            }
        }
        setKeyword(word);
        getKeyword(returnData);
    }

    /*--------------------------------------------------------------------------------*/
    /*---- Reset keyword input, keyword and set prop function getKeyword to empty ----*/
    /*--------------------------------------------------------------------------------*/
    const clearKeyWord = (e) => {
        // Prevent form default functionality
        e.preventDefault();

        refInput.current.value = '';
        setKeyword('');
        getKeyword('');
    }

    /*---------------------*/
    /*---- Return View ----*/
    /*---------------------*/
    return (
        <div className='keyword-container'>
            <div className='keyword-info outputs'>
                <h3>KEY: <span className='highlight-word'>{keyword}</span></h3>
            </div>
            <div className='keyword-content'>
                <input
                    ref={refInput}
                    className='keyword-input'
                    type='text'
                    onChange={changeKeyword}
                    placeholder='Enter keyword...'
                    required
                />
                <button className='keyword-btn' onClick={clearKeyWord}>CLR</button>
            </div>
            <div className={showMessage ? 'keyword-warning' : 'keyword-warning hidden'}>
                <span><BiErrorCircle /></span>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default Keyword






// const handleKeyword = (e) => {
//     e.preventDefault();
//     const key = refInput.current.value;
//     let word = '';
//     const returnData = [];

//     if (key.length > 0) {
//         for (let i = 0; i < key.length; i++) {
//             if (alphabets.includes(key[i].toUpperCase())) {
//                 word += key[i].toUpperCase();
//                 returnData.push(key[i].toUpperCase());
//             }
//             else {
//                 setMessage('Only alphabets are accepted!');
//                 setShowMessage(true);
//                 setTimeout(() => {
//                     setShowMessage(false);
//                     setMessage('');
//                 }, 2000);
//                 return
//             }
//         }
//     }
//     else {
//         setMessage('Enter the Keyword!');
//         setShowMessage(true);
//         setKeyword('');
//         setTimeout(() => {
//             setShowMessage(false);
//             setMessage('');
//         }, 2000);
//         return
//     }
//     setKeyword(word);
//     getKeyword(returnData);
//     setMessageSent(true);
// }
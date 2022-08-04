import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

// getData function as prop from parent component inputFrame.jsx, which inherited it from its parent component atbash.jsx
function InputForm( { getData, pasted, pasteItem } ) {

    // Declaring variables
    const [text, setText] = useState('');
    const refData = useRef();
    const refPaste = useRef();
    refPaste.current = pasteItem;

    // Function to handle text gathering onChange from the textarea
    const getText = (event) => {
        setText(event.target.value);
    }

    // Declare new function which calls getData-function
    // After that set the function as refData, which can be performed inside useEffect-hook
    // This is a solution for ESLint 'react-hooks/exhaustive-deps'-warning
    const setData = () => {
        getData(text);
    }
    refData.current = setData;

    // Here's the useEffect, which calls refData.current aka setData everytime 'text'-variable changes
    useEffect(() => {
        refData.current();
        if (pasted) {
            setText(refPaste.current);
        }
    }, [text, pasted])
    
    // Return View
    return (
        <form className="input-form">
            <textarea className='input' value={text} onChange={getText} placeholder='Enter your text here...' />
        </form>
    )
}

export default InputForm
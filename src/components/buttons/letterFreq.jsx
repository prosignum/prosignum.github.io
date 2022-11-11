import React from 'react';
import './letterFreq.css';

function LetterFreq( { analyze } ) {

	const handleClick = (e) => {
		e.preventDefault();
		analyze();
	}

	return (
		<div>
			<button className='analyze-btn' onClick={handleClick}>ANALYZE</button>
		</div>
	)
}

export default LetterFreq
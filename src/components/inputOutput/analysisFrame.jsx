import React from 'react';
import { BsFillBarChartFill } from 'react-icons/bs';
import './inputOutput.css';

function AnalysisFrame( { component } ) {
  return (
        <div className='inout-container'>
            <div className='inout-icon'>
                <BsFillBarChartFill />
            </div>
            <div className='inout-content'>
                {component}
            </div>
            <div className='inout-title'>
                <h2><span className='highlight-word'>Frequencies</span></h2>
            </div>
        </div>
    )
}

export default AnalysisFrame
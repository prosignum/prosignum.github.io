import React from 'react';
import { shapes } from './shapes';
import './backgroundA.css';

function BackgroundA() {
  return (
    <div className='bga-container'>
        {
            shapes.map(shape => (
              <div key={shape.id} className='shape-frame' style={{animationDelay: shape.delay}}>
                <div 
                  className='shape' 
                  style={{height: shape.height, width: shape.width, animationDelay: shape.delay}}>
                </div>
              </div>
            ))
        }
    </div>
  )
}

export default BackgroundA
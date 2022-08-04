import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card({ title, description, link, icon }) {
    return (
        <Link to={link}>
            <div className='card'>
                <div className='card-icon'>
                    {icon}
                </div>
                <div className='card-content'>
                    <div className='card-title-elem'>
                        <h2>{title}</h2>
                    </div>
                    <div className='animated-line'></div>
                    <p>{description}</p>
                </div>
                <div className='card-click'>
                    <h2>Click on the <span className='highlight-word'>Card</span> to proceed</h2>
                </div>
            </div>
        </Link>
    )
}

export default Card
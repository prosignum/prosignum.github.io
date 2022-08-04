import React from 'react';
import Card from '../card/card';
import { ciphers } from './cipherItems';
import './home.css';

function Home() {
  return (
    <section className='container-section'>
        <div className='title-container-home'>
          <h1 className='home-titles'>Choose your <span className='highlight-word'>Cipher</span> or analyze letter <span className='highlight-word'>Frequencies</span></h1>
        </div>
        <div className='c-cards'>
          {
            ciphers.map(item => 
              <Card key={item.id} title={item.title} description={item.description} link={item.path} icon={item.icon}/>
            )
          }
        </div>
    </section>
  )
}

export default Home
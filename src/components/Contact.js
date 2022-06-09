import React from 'react';
import Header from './utils/header';

export default function Contact() {
  return (
    <div>
      <Header />

      <main>

        <h1 className='style-h1'>How to reach me?</h1>
        <h2 className='style-h2'>Here are my contacts</h2>

        <ul>
          <li>Instagram: <a target="_blank" href='https://www.instagram.com/dhruvcodes.log'>dhruvcodes.log</a></li>
          <li>Email: <b>dhruvcodes7220@gmail.com</b></li>
          <li className='coding-font'><span className='green'>Direct message for website and app creation.</span></li>
          <li className='coding-font'><span className='red'>Don't message for issues you are getting in your system.</span></li>
        </ul>

        

      </main>
    </div>
  );
}

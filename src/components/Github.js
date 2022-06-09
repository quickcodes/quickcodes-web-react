import React from 'react';
import Header from './utils/header';

export default function Github() {
  return (
    <div>
    <Header />

    <main>

      <h1 className='style-h1'>Here is a link of my Github Page</h1>
      <h2 className='style-h2'>Check Out my repositories</h2>

      <ul>
        <li>Github: <a target="_blank" href='https://github.com/quickcodes'>quickcodes</a></li>
        {/* <li>Email: <b>dhruvcodes7220@gmail.com</b></li> */}
        {/* <li className='coding-font green'>Direct message for website and app creation.</li> */}
        {/* <li>Don't message for issues you are getting in your system.</li> */}
      </ul>

      

    </main>
    </div>
  );
}

import React from 'react';
import Header from './utils/header';
// import avtar from '../avtar.jpg'

export default function Home() {
  const FIRST_NAME = 'Dhruv';
  const LAST_NAME = 'Soni';
  const INTRO_HEAD = 'Hi, I am ';
  const INTRO_DESC =
    'I am Dhruv Soni, aka quickcodes. I am a 19 old guy from India, who loves Computers and Software. I am also a Computer Science Student. And using Linux Box.';

  const AVTAR_IMAGE = 'https://bugswriter.com/avatar.jpg';
  const avtar_img = "./images/avatar.jpg";

  return (
    <div>
      <Header />

      <main>
        <h2>{INTRO_HEAD}
            <span className="big_pink">{FIRST_NAME}</span>
            <span className="big_purple">&nbsp;{LAST_NAME}</span>
        </h2>



        <div className="centre">
          <img src={AVTAR_IMAGE} alt="Please check path" type="jpg" />
          {/* <img src="/images/avatar.jpg" alt="No image" type="jpg" /> */}
          {/* <img src="/images/1055.jpg" alt="No image" type="jpg" /> */}
        </div>

        <p className="intro">{INTRO_DESC}</p>

        {/* <h3>Website Guide</h3> */}
      </main>
    </div>
  );
}

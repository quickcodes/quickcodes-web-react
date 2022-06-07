import React from 'react';
import Header from './utils/header';
// import avtar from '../avtar.jpg'

export default function Home() {
  // const FIRST_NAME = 'Dhruv';
  // const LAST_NAME = 'Soni';
  // const INTRO_HEAD = 'Hi, I am ';
  const INTRO_DESC1 =
    'I am Dhruv Soni, aka quickcodes. I am a 19 old guy from India, who loves Computers and Softwares. I am also a Computer Science Student who using Linux Box.';

  const INTRO_DESC2 = "This website is a Home for my thoughts. Hopefully you also feel good after reading and if not then you maybe passionate about something else or you may have to make a contact with doctor. ";

  const AVTAR_IMAGE = 'https://bugswriter.com/avatar.jpg';
  // const avtar_img = './images/avatar.jpg';

  return (
    <div>
      <Header />

      <main>
        {/* <h2>
          {INTRO_HEAD}
          <span className="big_pink">{FIRST_NAME}</span>
          <span className="big_purple">&nbsp;{LAST_NAME}</span>
        </h2> */}

        {/* <div className="centre">
          <img src={AVTAR_IMAGE} alt="Please check path" type="jpg" />
        </div>

        <p className="intro coding-font">{INTRO_DESC}</p> */}

        {/* <div className="container">
          <div className="row g-3">
            <div className="product-image col-12 col-md-5 h-50">
              <img src={AVTAR_IMAGE} alt="Please check path" type="jpg" />

            </div>

            <div className="col-12 col-md-7 d-flex flex-column white">
              <p className="intro coding-font">{INTRO_DESC}</p>
            </div>
          </div>
        </div> */}

        <div className="container">
          <div class="row g-3">
            <div class="centre col-12 col-md-5 h-50">
              <img src={AVTAR_IMAGE} alt="The Secret of Secrets" />
            </div>
            <div class="col-12 col-md-7 d-flex flex-column text-white">
              <p className="intro coding-font">{INTRO_DESC1}</p>
              <p className="intro coding-font">{INTRO_DESC2}</p>
            </div>
          </div>
        </div>

        <h2>Website Guide</h2>
        <ul className="coding-font">
          <li>
            If you find this website ugly - <a href="/minimal">It's minimal</a>
          </li>
          <li>
            Check Out my <a href="/projects">Projects</a>
          </li>
          <li>
            My <a href="/projects">Blogs</a>
          </li>
          <li>Website is created by Linux Lover.</li>
        </ul>
      </main>
    </div>
  );
}

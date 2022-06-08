import React from 'react';
import About from './About';
import Header from './utils/header';
// import avtar from '../avtar.jpg'

export default function Home() {
  // const FIRST_NAME = 'Dhruv';
  // const LAST_NAME = 'Soni';
  // const INTRO_HEAD = 'Hi, I am ';
  const INTRO_DESC1 =
    'I am Dhruv Soni, aka quickcodes. I am a 19 old guy from India, who loves Computers and Softwares. I am also a Computer Science Student and using Linux Box.';

  // const INTRO_DESC2 = "This website is a Home for my thoughts. Hopefully you also like them. After visiting this web maybe you won't satisfy maybe are passionate about something else. I tried to make things minimal and simple as possible :) ";

  let INTRO_DESC2 = "This is a place where I show my interests, express my thoughts and opinions and reveal my personality. I choose to build a website for this because of the freedom that a personal webpage offers."

  const AVTAR_IMAGE = 'https://bugswriter.com/avatar.jpg';
  // let profile_name = "avatar"
  // const AVTAR_IMAGE = "images/" + profile_name + ".jpg";

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
              <img className='border-dark' src={AVTAR_IMAGE} alt="The Secret" />
            </div>
            <div class="col-12 col-md-7 d-flex flex-column text-white border-light margin-10">
              <p className="intro coding-font">{INTRO_DESC1}</p>
              <p className="intro coding-font">{INTRO_DESC2}</p>
            </div>
          </div>
        </div>

        <div className='border-dark'>

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
          <li>Website is created by Self Taught Programmer.</li>
        </ul>
        </div>
      </main>


      <h1 className='margin-10'>About Page</h1>
      <About></About>
    </div>
  );
}

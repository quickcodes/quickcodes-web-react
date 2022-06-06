import React from 'react';
// import avtar from '../avtar.jpg'

export default function Home() {
  const FIRST_NAME = 'Dhruv';
  const LAST_NAME = 'Soni';
  const INTRO_HEAD = 'Hi, I am QuickCodes';
  const INTRO_DESC =
    'I am Dhruv Soni, aka quickcodes. I am a 19 old guy from India, who loves Computers and Software. I am also a Computer Science Student. And using Linux Box.';
  const nav_bar = [
    { name: 'Home', link: "/about" },
    { name: 'About', link: "/about" },
    { name: 'Blog', link: "/about" },
    { name: 'Github', link: "/about" },
    { name: 'Contact', link: "/about" },
  ];
  const QUOTES =
    ' Descipline and regret both are painfull \nDecide what you want to live with. ';
  const AVTAR_IMAGE = 'https://bugswriter.com/avatar.jpg';
  let rand_img1 = Math.floor(Math.random() * (1190 - 1000 + 1)) + 1000;
  let rand_img2 = Math.floor(Math.random() * (1190 - 1000 + 1)) + 1000;
  let rand_img3 = Math.floor(Math.random() * (1190 - 1000 + 1)) + 1000;

  rand_img1 = "/images/" + rand_img1 + ".jpg";
  rand_img2 = "/images/" + rand_img2 + ".jpg";
  rand_img3 = "/images/" + rand_img3 + ".jpg";

  return (
    <div>
      <header>

        <div className='centre'>
          {/* <span>{rand_img1}</span> */}
          <img src={rand_img1} alt="No image" type="jpg" />
          <img src={rand_img2} alt="No image" type="jpg" />
          <img src={rand_img3} alt="No image" type="jpg" />
        </div>

        <h1>
          <span className="big_pink">{FIRST_NAME}</span>
          <span className="big_purple">&nbsp;{LAST_NAME}</span>
        </h1>

        <div className="centre">
          <form id="search-site">
            <input type="text" placeholder="Search Blogs" />
            <button>Go</button>
          </form>
        </div>

        <div className="centre">
          <nav>
            {nav_bar.map((x) => (
              <span className="nav-button">
                [ <a href={x.link}>{x.name}</a> ]
              </span>
            ))}
          </nav>
        </div>

        <div className="centre">
          <p className="quotes">
            <b>"</b>
            {QUOTES}
            <b>"</b>
          </p>
        </div>
      </header>

      <main>
        <h2>{INTRO_HEAD}</h2>

        <div className="centre">
          <img src={AVTAR_IMAGE} alt="No image" type="jpg" />
          {/* <img src="/images/1000.jpg" alt="Please check path" type="jpg" /> */}
        </div>

        <p className="intro">{INTRO_DESC}</p>

        {/* <h3>Website Guide</h3> */}
      </main>
    </div>
  );
}

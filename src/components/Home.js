import React from 'react';

export default function Home() {
  const FIRST_NAME = 'Dhruv';
  const LAST_NAME = 'Soni';
  const INTRO_HEAD = 'Hi, I am QuickCodes';
  const INTRO_DESC =
    'I am Dhruv Soni, aka quickcodes. I am a 19 old guy from India, who loves Computers and Software. I am also a Computer Science Student.';
  const nav_bar = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Blog' },
    { name: 'Github' },
    { name: 'Contact' },
  ];
  const QUOTES = ' Every Star Shines Differently ';

  return (
    <div>
      <header>
        <h1>
          <span className="big_pink">{FIRST_NAME}</span>
          <span className="big_purple">&nbsp;{LAST_NAME}</span>
        </h1>
        <div className="centre">
          <input type="text" placeholder="Search Blogs" />
          <button>Go</button>
        </div>
        <div className="centre">
          <p className="quotes">
            <b>"</b>
            {QUOTES}
            <b>"</b>
          </p>
        </div>

        <div className="centre">
          {nav_bar.map((x) => (
            <span className="nav-button">
              [ <a href="/">{x.name}</a> ]
            </span>
          ))}
        </div>
      </header>

      <main>
        <h2>{INTRO_HEAD}</h2>

        <p className="intro">{INTRO_DESC}</p>

        <p>this is text</p>
      </main>
    </div>
  );
}

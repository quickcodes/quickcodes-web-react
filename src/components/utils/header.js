import React from 'react';

export default function Header() {
    const FIRST_NAME = 'Dhruv';
    const LAST_NAME = 'Soni';
      'I am Dhruv Soni, aka quickcodes. I am a 19 old guy from India, who loves Computers and Software. I am also a Computer Science Student. And using Linux Box.';
    const nav_bar = [
      { name: 'Home', link: "/home" },
      { name: 'About', link: "/about" },
      { name: 'Blog', link: "/blog" },
      { name: 'Github', link: "/github" },
      { name: 'Contact', link: "/contact" },
    ];
    const QUOTES =
      // ' Descipline and regret both are painfull \nDecide what you want to live with. ';
      'try{<br/>   your best;<br/>}catch(Yourself){<br/>   everytime you fail;<br/>}'

    let rand_img1 = Math.floor(Math.random() * (1190 - 1000 + 1)) + 1000;
    let rand_img2 = Math.floor(Math.random() * (1190 - 1000 + 1)) + 1000;
    let rand_img3 = Math.floor(Math.random() * (1190 - 1000 + 1)) + 1000;
    
    // rand_img1 = "/images/" + rand_img1 + ".jpg";
    // rand_img2 = "/images/" + rand_img2 + ".jpg";
    // rand_img3 = "/images/" + rand_img3 + ".jpg";


    rand_img1 = "https://bugswriter.com/pics/" + rand_img1 + ".jpg";
    rand_img2 = "https://bugswriter.com/pics/" + rand_img2 + ".jpg";
    rand_img3 = "https://bugswriter.com/pics/" + rand_img3 + ".jpg";

  return (
    <div>
        <header>

            <div className='centre'>
                {/* <span>{rand_img1}</span> */}
                <img src={rand_img1} alt="No image" type="jpg" />
                <img src={rand_img2} alt="No image" type="jpg" />
                <img src={rand_img3} alt="No image" type="jpg" />
            </div>

            {/* <h1>
                <span className="big_pink">{FIRST_NAME}</span>
                <span className="big_purple">&nbsp;{LAST_NAME}</span>
            </h1> */}

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

            <div>
            <p className="sql glow">
                {/* <b>"</b>
                {QUOTES}
                <b>"</b> */}
                {/* <p> */}
                {/* try&#123;<br/>   your best;<br/>&#10101;catch(Yourself)&#123;<br/>   everytime you fail;<br/>&#10101; */}
                {/* </p> */}
                <span className='blue'> SELECT </span>
                <span className='red'> * </span>
                <span className='blue'> FROM </span>
                <span className='red'> people </span>
                <span className='blue'> WHERE </span>
                <span className='red'> goals </span>
                <span className='blue'> = '</span>
                <span className='red'> same</span>
                <span className='blue'> ' </span>
            </p>
            </div>
        </header>
    </div>
  );
}

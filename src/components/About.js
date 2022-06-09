import React from "react";
import Header from "./utils/header";

export default function About() {
  return (
    <div>
      <Header />

      <main>
        <h1 className="margin-10 style-h1">About Me</h1>
        {/* container starts  */}
        <div className="container">
          <div className="row g-3">
            {/* Text column  */}
            <div className="col-12 col-md-7 d-flex flex-column text-white border-s margin-10 padd">
              <div>
                <h2 className="start green coding-font style-h2">
                  What more do you wanna know about me?
                </h2>

                <ul className=" coding-font">
                  <li>
                    When someone asks <span className="bg-color-custom">Tell me about yourself?</span> It almost feels
                    like someone allowed me to sing an old song. Same lyrics
                    with some variables in it.
                  </li>

                  <li>
                    Maybe you are expecting somthing like - My name is
                    <span className="blue"> $FULL_Na </span>I am
                    <span className="blue"> $PROFESSION </span>
                    and i live in
                    <span className="blue"> $CITY. </span>
                    But Putting variables in a shity old 90's line will not
                    define who you are right?
                  </li>

                  <li>
                    What defines me is that i like to live a minimal life. where
                    no continous blotted &amp; shity notifications are comming
                    to my phone.
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Column  */}
            <div className="centre col-12 col-md-5 h-50">
              <img
                className="border-dark"
                src="images/1192.jpg"
                alt="The Secret"
              />
            </div>
          </div>
        </div>

        <p className="border-dark coding-font paragraph para-padding">
          To give you a quick overview of subjects this site features now, or
          will feature in the future, here's a list of things I am interested
          in -
          
          <ul className="border-light margin-10">
            <li>Linux Stuffs.</li>
            <li>Basic fundamentals of coding.</li>
            <li>Web and App Developement.</li>
            <li>Basics of DataBase.</li>
          </ul>
        </p>
      </main>

      {/* <div className="half-right">
            <img src="https://bugswriter.com/avatar.jpg" alt=""/>
        </div> */}
      {/* </div> */}
    </div>
  );
}

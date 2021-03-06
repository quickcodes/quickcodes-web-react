import React from "react";
import Header from "./utils/header";

export default function Minimal() {
  return (
    <div>
      <Header />
      <h1 className="margin-10 style-h1">About This Website</h1>
      <main>
        {/* container starts  */}
        <div className="container">
          <div className="row g-3">
            {/* Image Column  */}
            <div className="centre col-12 col-md-5 h-50">
              <img
                className="border-dark"
                src="images/1150.jpg"
                alt="The Secret"
              />
            </div>

            {/* Text column  */}
            <div className="col-12 col-md-7 d-flex flex-column text-white border-s margin-10 padd">
              <div>
                <h2 className="start green coding-font para-padding style-h2">
                  What are your toughts about this website? Is it ugly, bloated,
                  slow? Or is it minimal, clean, fast?
                </h2>

                {/* <ul className=" coding-font">
                  <li>
                    In our century most of the websites are ugly But not by
                    there UI, look, animations, etc. They are ugly by there
                    adds, trackers, blotwares, etc. which cost you almost 5MB -
                    30MB and took 5-10 seconds to load a web page. Now you must say we have super
                    fast processors and high speed bandwidth we don't care about
                    it anymore. But here is the catch that the
                    core/main/relevant content of the websites is costing less
                    then 1MB and took less than 1 second to load. So Where the remamining data and time gone? Yes, You are
                    right! The remaining data is eated by those adds, trackers,
                    javascripts, blotwares, etc. Which are even not necessary
                    for the web. 
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
                </ul> */}
              </div>
            </div>

            <p className="coding-font border-dark para-padding">
              In our century{" "}
              <span className="bg-color-custom">
                most of the websites are ugly
              </span>{" "}
              But not by there UI, look, animations, etc. They are ugly by there
              adds, trackers, blotwares, etc.{" "}
              <span className="bg-color-custom">
                A normal website cost you almost 5MB - 30MB data and took 5-10
                seconds to load a web page.
              </span>{" "}
              Now you must say we have super fast processors and high speed
              bandwidth we don't care about it anymore. But here is the catch
              that the{" "}
              <span className="bg-color-custom">
                core/main/relevant content of the websites is costing less then
                1MB and took less than 1 second to load.
              </span>{" "}
              So Where the remamining data and time gone? Yes, You are right!
              The remaining data is eated by those adds, trackers, javascripts,
              blotwares, etc. Which are even not necessary for the web.
            </p>

            <p className="coding-font border-dark para-padding">
              Do you why Google is the world most popular search engine? whereas
              There are lot's of other search engine's are available. <br />
              Because at the initial age search engines where others have adds,
              popups, trackers on there search engine Google just provide a logo
              and search bar in centre.
            </p>

            <p className="coding-font border-dark para-padding">
              If you are searching for a recipe on internet and you found 2
              Websites there. First one is eye catchy, Beautiful, loaded with
              adds, trackers, junk. and the other one is simple, intractive,
              fast, and just provide you a recipe. You will definately gonna
              choose the second one. right?
            </p>

            <h2 className="style-h2">
              Still think it is ugly? <a href="#/bad-words">click Here</a>
            </h2>
          </div>
        </div>

        {/* <p className="border-dark coding-font paragraph para-padding">
          To give you a quick overview of subjects this site features now, or
          will feature in the future, here's a list of things I am interested in
          -
          <ul className="border-light margin-10">
            <li>Linux Stuffs.</li>
            <li>Basic fundamentals of coding.</li>
            <li>Web and App Developement.</li>
            <li>Basics of DataBase.</li>
          </ul>
        </p> */}
      </main>
    </div>
  );
}

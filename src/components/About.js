import React from 'react';
import Header from './utils/header';

export default function About() {
  return (
    <div >
      <Header />

      {/* <div className="flex"> */}
        <div className="half-left">
          <h2 className="start green coding-font tables-points">
            What more do you wanna know about me?
          </h2>

          <ul className="tables-points coding-font">
            <li>
            When someone asks Tell me about yourself? It almost feels like someone allowed them to sing an old song. Same lyrics with some variables in it.
            </li>

            <li>
              Maybe you are expecting somthing like - My name is
              <span className="blue"> $FULL_Name </span>I am
              <span className="blue"> $PROFESSION </span>
              and i live in
              <span className="blue"> $CITY. </span>
              But Putting variables in a shity old 90's line will not define who you are right?
            </li>
          </ul>
        </div>

        {/* <div className="half-right">
          some text
        </div> */}
      {/* </div> */}

    </div>
  );
}

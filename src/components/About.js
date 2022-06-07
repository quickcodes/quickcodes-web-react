import React from 'react';
import Header from './utils/header';

export default function About() {
  return (
    <div className="start">
      <Header />
      <h3 className="start white coding-font">
        What more do you wanna know about me?
      </h3>

      <ul className="coding-font">
        <li>
          Maybe you are expecting somthing like - My name is
          <span className="blue"> $FULL_Name </span>I am
          <span className="blue"> $PROFESSION </span>
          and i live in
          <span className="blue"> $CITY. </span>
          But Putting different variables in the same line each time can't
          introduce anyone.
        </li>
      </ul>
    </div>
  );
}

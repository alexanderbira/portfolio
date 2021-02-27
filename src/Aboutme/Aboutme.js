import React from "react";
import "./Aboutme.css";

export default class Aboutme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div id="aboutMe">
          <img id="profilePic" src="/profile.webp" alt="" />
          <p id="meDescription">
            Hey, I'm Alexander,
            <br />
            I do functional web development in my free time.
            <br />I code in in HTML, CSS, JS (ES6), React, React-Native, PHP,
            and Python.
          </p>
        </div>
      </header>
    );
  }
}

import React from "react";
import "./App.css";

import profilePic from "../profile.png";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div id="aboutMe">
          <img id="profilePic" src={profilePic} />
          <p id="meDescription">Hey, I'm Alexander and I do functional web design in my free time<br />I'm fairly competent in HTML, CSS, JS (ES6), React, React-Native, PHP, and Python</p>
        </div>
      </header>
    );
  }
}

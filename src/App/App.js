import React from "react";
import "./App.css";

import Demos from "../Demos/Demos.js";
import Aboutme from "../Aboutme/Aboutme.js";
import Follow from "../Follow/Follow.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Aboutme />
        <Demos />
        <Follow />
      </React.Fragment>
    );
  }
}

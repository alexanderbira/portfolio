import React from "react";
import "./Demos.css";

import DemoCard from "./DemoCard/DemoCard.js";
import sites from "./sites.json";
sites.map((site) => (site.importance += Math.random()));
sites.sort((a, b) => b.importance - a.importance);

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context("./thumbnails/", false, /\.(png|jpe?g|svg)$/)
);

export default class Demos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardNum: 0, cardMax: images.length - 3 };
  }

  handleNext = () => {
    if (typeof this.timeout == "undefined") {
      document.getElementsByTagName("section")[0].classList = ["leave"];
      this.timeout = setTimeout(() => {
        this.setState({
          cardNum:
            this.state.cardNum === this.state.cardMax
              ? 0
              : this.state.cardNum + 1,
        });
        document.getElementsByTagName("section")[0].classList = ["enter"];
        this.timeout = undefined;
      }, 1000);
    }
  };

  handlePrev = () => {
    if (typeof this.timeout == "undefined") {
      document.getElementsByTagName("section")[0].classList = ["enter2"];
      this.timeout = setTimeout(() => {
        this.setState({
          cardNum:
            this.state.cardNum === 0
              ? this.state.cardMax
              : this.state.cardNum - 1,
        });
        document.getElementsByTagName("section")[0].classList = ["leave2"];
        this.timeout = undefined;
      }, 1000);
    }
  };

  render() {
    return (
      <main>
        <button onClick={this.handlePrev} className="demoNav">
          ᐸ
        </button>
        <DemoCard
          image={
            images.find((img) => {
              if (img.default.includes(sites[this.state.cardNum].thumbnail)) {
                return true;
              } else {
                return false;
              }
            }).default
          }
          {...sites[this.state.cardNum]}
        />
        <button onClick={this.handleNext} className="demoNav">
          ᐳ
        </button>
      </main>
    );
  }
}
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
  require.context("./thumbnails/", false, /\.webp$/)
);

var loadedimages = [];
for (let i = 0; i < images.length; i++) {
  loadedimages[i] = new Image();
  loadedimages[i].src = images[i];
}

export default class Demos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardNum: 0, cardMax: images.length - 2 };
  }

  handleNext = () => {
    if (typeof this.timeout == "undefined") {
      document.getElementsByTagName("section")[0].classList = ["demo leave"];
      this.timeout = setTimeout(() => {
        this.setState({
          cardNum:
            this.state.cardNum === this.state.cardMax
              ? 0
              : this.state.cardNum + 1,
        });
        document.getElementsByTagName("section")[0].classList = ["demo enter"];
        this.timeout = undefined;
      }, 1000);
    }
  };

  handlePrev = () => {
    if (typeof this.timeout == "undefined") {
      document.getElementsByTagName("section")[0].classList = ["demo enter2"];
      this.timeout = setTimeout(() => {
        this.setState({
          cardNum:
            this.state.cardNum === 0
              ? this.state.cardMax
              : this.state.cardNum - 1,
        });
        document.getElementsByTagName("section")[0].classList = ["demo leave2"];
        this.timeout = undefined;
      }, 1000);
    }
  };

  handleAny = (num) => {
    let cn = this.state.cardNum;
    if (typeof this.timeout == "undefined" && num < cn) {
      document.getElementsByTagName("section")[0].classList = ["demo enter2"];
      this.timeout = setTimeout(() => {
        this.setState({
          cardNum: num,
        });
        document.getElementsByTagName("section")[0].classList = ["demo leave2"];
        this.timeout = undefined;
      }, 1000);
    } else if (num > cn) {
      document.getElementsByTagName("section")[0].classList = ["demo leave"];
      this.timeout = setTimeout(() => {
        this.setState({
          cardNum: num,
        });
        document.getElementsByTagName("section")[0].classList = ["demo enter"];
        this.timeout = undefined;
      }, 1000);
    }
  };

  render() {
    return (
      <main>
        <h1>Site Demos</h1>
        <p>
          Here are some demos of websites I've made, pseudo-randomly sorted by
          how proud I am of them.
        </p>
        <div
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "15vh",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={this.handlePrev}
              className="demoNav"
              title="see previous card"
              style={{ marginRight: "10vmin" }}
            >
              ᐸ
            </button>
            <DemoCard
              image={
                images.find((img) => {
                  if (
                    img.default.includes(sites[this.state.cardNum].thumbnail)
                  ) {
                    return true;
                  } else {
                    return false;
                  }
                }).default
              }
              {...sites[this.state.cardNum]}
            />
            <button
              onClick={this.handleNext}
              className="demoNav"
              title="see next card"
              style={{ marginLeft: "10vmin" }}
            >
              ᐳ
            </button>
          </div>
          <nav>
            {sites.map(({ name }, i) => (
              <button
                onClick={() => this.handleAny(i)}
                title={name}
                className="navButton"
                style={{
                  background:
                    this.state.cardNum === i ? "black" : "transparent",
                }}
                key={i}
              ></button>
            ))}
          </nav>
        </div>
      </main>
    );
  }
}

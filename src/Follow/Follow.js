import React from "react";
import "./Follow.css";

import fEL from "../Follow/certificates/front-end-libraries-certificate.webp";
import jAADS from "../Follow/certificates/javascript-algorithms-and-data-structures-certificate.webp";
import rWD from "../Follow/certificates/responsive-web-design-certificate.webp";

import codepen from "../Follow/icons/codepen.svg";
import freecodecamp from "../Follow/icons/freecodecamp.svg";
import github from "../Follow/icons/github.svg";
import gist from "../Follow/icons/gist.svg";
import replit from "../Follow/icons/replit.svg";
import stackoverflow from "../Follow/icons/stackoverflow.svg";

export default class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: undefined,
    };
  }

  handleFocus = (element) => {
    this.setState({
      focused: element,
    });
  };

  render() {
    return (
      <footer>
        <h1>Follow</h1>

        {
          [
            "",
            <img
              src={fEL}
              alt="front-end-libraries-certificate"
              style={{
                position: "fixed",
                bottom: 0,
                height: "100vh",
                maxWidth: "100vw",
                zIndex: 1000,
                left: 0,
                right: 0,
                margin: "auto auto auto auto",
                cursor: "pointer",
              }}
              onClick={() => this.handleFocus(0)}
              title="click to hide"
            />,
            <img
              src={jAADS}
              alt="javascript-algorithms-and-data-structures-certificate"
              style={{
                position: "fixed",
                bottom: 0,
                height: "100vh",
                maxWidth: "100vw",
                zIndex: 1000,
                left: 0,
                right: 0,
                margin: "auto auto auto auto",
                cursor: "pointer",
              }}
              onClick={() => this.handleFocus(0)}
              title="click to hide"
            />,
            <img
              src={rWD}
              alt="responsive-web-design-certificate"
              style={{
                position: "fixed",
                bottom: 0,
                height: "100vh",
                maxWidth: "100vw",
                zIndex: 1000,
                left: 0,
                right: 0,
                margin: "auto auto auto auto",
                cursor: "pointer",
              }}
              onClick={() => this.handleFocus(0)}
              title="click to hide"
            />,
          ][this.state.focused]
        }

        <div className="certificates">
          <img
            src={fEL}
            alt="front-end-libraries-certificate"
            onClick={() => this.handleFocus(1)}
          />
          <img
            src={jAADS}
            alt="javascript-algorithms-and-data-structures-certificate"
            onClick={() => this.handleFocus(2)}
          />
          <img
            src={rWD}
            alt="responsive-web-design-certificate"
            onClick={() => this.handleFocus(3)}
          />
        </div>
        <div className="socials">
          <a
            href="https://repl.it/@AlexanderBirabe"
            target="_blank"
            rel="noreferrer"
          >
            <img src={replit} className="socialIcon" alt="repl.it" />
          </a>
          <a
            href="https://github.com/alexanderbira"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} className="socialIcon" alt="github" />
          </a>
          <a
            href="https://gist.github.com/alexanderbira"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gist} className="socialIcon" alt="github gist" />
          </a>
          <a
            href="https://stackoverflow.com/users/12309608/alexanderbira"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={stackoverflow}
              className="socialIcon"
              alt="stackoverflow"
            />
          </a>
          <a
            href="https://www.freecodecamp.org/alexanderbira"
            target="_blank"
            rel="noreferrer"
          >
            <img src={freecodecamp} className="socialIcon" alt="freecodecamp" />
          </a>
          <a
            href="https://codepen.io/alexanderbira"
            target="_blank"
            rel="noreferrer"
          >
            <img src={codepen} className="socialIcon" alt="codepen" />
          </a>
        </div>
      </footer>
    );
  }
}

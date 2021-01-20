import React from "react";
import "./DemoCard.css";

export default class DemoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <a href={this.props.url} target="_blank" rel="noreferrer">
        <section className="demo">
          <img src={this.props.image} alt="thumbnail" />
          <article>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
          </article>
        </section>
      </a>
    );
  }
}

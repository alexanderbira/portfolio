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
).map(i=>i.default);

sites.forEach(site => {
  site.image = images.find(i=>i.includes(site.thumbnail));
});

export default class Demos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardNum: 0, cardMax: images.length - 2 };
  }

  handleAny = (num) => {
    
        this.setState({
          cardNum: num,
        });
       
  };

  render() {
    return (
      <main>
        <h1>Site Demos</h1>
        <p>
          Here are some demos of websites I've made, pseudo-randomly sorted by
          how proud I am of them.
        </p>




          <section className="demos">
            {
              sites.map((a,i)=><DemoCard {...sites[i]} key={i}/>)
            }
          </section>
            


          
      </main>
    );
  }
}

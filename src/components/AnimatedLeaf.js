import React, { Component } from "react";
import "../styles/app.sass";

class AnimatedLeaf extends Component {
  state = {
    leafs: [],
    counter: 1
  };
  componentDidMount() {
    for (let i = 0; i < `${window.innerWidth < 1200 ? 0 : 30}`; i++) {
      const leaf = document.createElement("i");
      leaf.className = `animate ${
        this.leafs[Math.floor(Math.random() * (3 - 0 + 1)) + 0]
      }`;
      leaf.style.top = `${Math.floor(Math.random() * (10 - 0 + 1)) + 0}vh`;
      leaf.style.left = `${Math.floor(Math.random() * (99 - 1 + 1)) + 1}vw`;
      leaf.style.animationDelay = `${(Math.random() * (13 - 0 + 1) + 0).toFixed(
        1
      )}s`;
      leaf.style.animationDuration = `${(
        Math.random() * (11 - 9 + 1) +
        9
      ).toFixed(1)}s`;
      leaf.style.color = `rgb(0,${Math.floor(Math.random() * (200 - 50 + 1)) +
        50},0)`;
      document.body.appendChild(leaf);
    }
  }

  leafs = [
    "fas fa-leaf",
    "fab fa-canadian-maple-leaf",
    "fab fa-envira",
    "fab fa-pagelines"
  ];
  render() {
    return <></>;
  }
}

export default AnimatedLeaf;

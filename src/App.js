import React, { Component } from "react";
import logo from "./cognite-logo.png";
import "./App.css";

const colors = [
  "#8c7ae6",
  "#e1b12c",
  "#44bd32",
  "#c23616",
  "#192a56",
  "#40739e"
];

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Cognite Dice Project</h1>
        </header>
        <section className="app-left-right">
          <section className="app-left">
            <div>Dice!</div>
          </section>
          <section className="app-right">
            <div>Chart!</div>
          </section>
        </section>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Button from './Button';
import './App.css';
import setting from './setting.json';

class App extends Component {
  render() {
    return (
      <ul className="App">
        <Button name="hahaha" gpioPin="18" ></Button>
        <Button name="hehehe" gpioPin="23" ></Button>
        <Button name="hohoho" gpioPin="24" ></Button>
      </ul>
    );
  }
}

export default App;

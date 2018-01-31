import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	constructor() {
		super();
		// this.state.name = "hahaha";
	}

  render() {
    return (
      <li className="button">
          <h1 className="App-title">{this.props.name}</h1>
      </li>
    );
  }
}

export default Button;

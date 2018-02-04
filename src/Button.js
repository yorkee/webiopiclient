import React, { Component } from 'react';
import './Button.css';
import setting from './setting.json';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
      isToggleOn: true
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
	}

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    //this.state.isToggleOn
    let url = [
      "http://",
      setting.ip,
      ":",
      setting.port,
      "/GPIO/",
      this.props.gpioPin,
      "/function/",
      (this.state.isToggleOn ? 'IN' : 'OUT')].join("");

    fetch(url, {
        method  : 'post'
      })
//TODO: handle stuff!!
      .then(
        (result) => {},
        (error) => {
          // this.setState(prevState => ({
          //   isToggleOn: !prevState.isToggleOn
          // }));
        }
      )    
  }

  render() {
    return (
      <li className="button">
        <button onClick={this.handleClick}>
          <h1 className="App-title">{this.props.name}</h1>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>          
      </li>
    );
  }
}

export default Button;

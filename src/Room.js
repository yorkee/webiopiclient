import React, { Component } from 'react';
import Button from './Button';
import './Room.css';

class Room extends Component {
  render() {
    return (
      <ul className="room">
        <Button name="hahaa"></Button>
        <Button name="hehehe"></Button>
        <Button name="hoho"></Button>
      </ul>
    );
  }
}

export default Room;

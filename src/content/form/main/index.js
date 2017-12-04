import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import MultiplySelelct from './multiplySelelct';
import './style.css';

class Main extends Component {
  render() {
    return (
      <form>
        <div className="User">
          <FormGroup
            controlId="formBasicText">
            <ControlLabel>User:</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter text"/>
            <FormControl.Feedback />
            <MultiplySelelct />
          </FormGroup>

        </div>
      </form>
    );
  }
}

export default Main;
import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import DropdownSelect from './dropdownSelect';
import './style.css';

class Master extends Component {
  render() {
    return (
      <FormGroup>
        <DropdownSelect />
      </FormGroup>
    );
  }
}

export default Master;
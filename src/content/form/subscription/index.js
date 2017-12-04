import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import DropdownSelect from './dropdownSelect';
import './style.css';

class Subscription extends Component {
  render() {
    return (
      <FormGroup>
        <DropdownSelect />
      </FormGroup>
    );
  }
}

export default Subscription;
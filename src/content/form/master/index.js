import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import DropdownSelect from './dropdownSelect';
import './style.css';

class Master extends Component {
  render() {
    const { master } = this.props;
    return (
      <FormGroup>
        <DropdownSelect master={master} />
      </FormGroup>
    );
  }
}

export default Master;

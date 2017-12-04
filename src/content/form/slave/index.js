import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import DropdownSelect from './dropdownSelect';

class Slave extends Component {
  render() {
    return (
      <FormGroup>
        <DropdownSelect />
      </FormGroup>
    );
  }
}

export default Slave;
import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import DropdownSelect from './dropdownSelect';
import './style.css';

class Subscription extends Component {
  render() {
    const { subs } = this.props;

    return (
      <FormGroup>
        <DropdownSelect subs={subs} />
      </FormGroup>
    );
  }
}

export default Subscription;

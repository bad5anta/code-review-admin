import React, { Component } from 'react';
import { observer, Observer } from 'mobx-react';
import { FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import MultiplySelelct from './multiplySelelct';
import './style.css';

class Main extends Component {
  render() {
    const { user } = this.props;;
    console.log('user', user)

    return (
      <form>
        <div className="User">
          <FormGroup
            controlId="formBasicText">
            <ControlLabel>User:</ControlLabel>
            <FormControl
              type="text"
              value={user && user.name}
              placeholder="User name"/>
            <FormControl.Feedback />
            <MultiplySelelct />
          </FormGroup>

        </div>
      </form>
    );
  }
}

export default observer(Main);

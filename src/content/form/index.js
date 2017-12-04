import React, { Component } from 'react';
import Main from './main';
import Subscription from './subscription';
import Master from './master';
import Slave from './slave';
import Search1 from './search1';
import Search2 from './search2';
import './style.scss';

class Form extends Component {
  render() {
    return (
      <div>
        <Main/>
        <Subscription/>
        <Master/>
        <Slave/>
        <Search1/>
        <Search2/>
      </div>
    );
  }
}

export default Form;
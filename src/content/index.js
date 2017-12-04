import React, { Component } from 'react';
import List from './list';
import Form from './form';
import './style.css';

class Content extends Component {
  render() {
    return (
      <main className="content">
          <Form />
      </main>
    );
  }
}

export default Content;

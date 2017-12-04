import React, { Component } from 'react';
import Content from './content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="userList">
          <li><a href="">User1</a></li>
          <li><a href="">User2</a></li>
          <li><a href="">User3</a></li>
        </ul>

        <Content />

      </div>
    );
  }
}

export default App;

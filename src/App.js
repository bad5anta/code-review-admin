import React, { Component } from 'react';
import Content from './content';
import UsersList from './components/UsersList/index.js';
import Header from './header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="AppContainer">
          <UsersList />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;

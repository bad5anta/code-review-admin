import React, { Component } from 'react';
import Content from './content';
import UsersList from './components/UsersList/index.js';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UsersList />
        <Content />
      </div>
    );
  }
}

export default App;

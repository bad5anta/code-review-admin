import React, { Component } from 'react';
import Content from './content';
import UsersList from './components/UsersList/index.js';
import { observer } from 'mobx-react';

import Header from './header';
import './App.css';

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

export default observer(App);

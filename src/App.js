import React, { Component } from 'react';
import Content from './content';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;

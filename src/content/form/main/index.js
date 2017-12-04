import React, { Component } from 'react';
import './style.css';

class Main extends Component {
  render() {
    return (
      <form>
        <header>Form</header>

        <div className="User">
          <input type="text" />
          <input type="text" />
        </div>
      </form>
    );
  }
}

export default Main;
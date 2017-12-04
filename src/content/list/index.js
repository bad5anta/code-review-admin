import React, { Component } from 'react';
import './style.css';

class List extends Component {
  render() {
    return (
      <ul className="userList">
        <li><a href="">User1</a></li>
        <li><a href="">User2</a></li>
        <li><a href="">User3</a></li>
      </ul>
    );
  }
}

export default List;
import React, { Component } from 'react';
import './style.css';

class List extends Component {
  render() {
    const { users } = this.props;

    const content = users.length === 0
      ? <li>No matches!</li>
      : (
        users.map((user, i) => {
          return <li key={i}><a href="">{user}</a></li>
        })
      )
      console.log('content', users);
    return (
      <ul className="userList">
        {content}
      </ul>
    );
  }
}

export default List;

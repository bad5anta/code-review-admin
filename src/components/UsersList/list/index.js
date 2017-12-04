import React, { Component } from 'react';
import './style.css';

class List extends Component {
  render() {
    const { users, keyWord } = this.props;

    const content = users.length === 0
      ? <li>{keyWord !== '' ? 'No matches!' : 'No data yet'}</li>
      : (
        users.map((user, i) => {
          return <li key={user.id}><a href="">{user.email}</a></li>
        })
      )

    return (
      <ul className="userList">
        {content}
      </ul>
    );
  }
}

export default List;

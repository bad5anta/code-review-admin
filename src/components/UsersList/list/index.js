import React, { Component } from 'react';
import currentUser from '../../../stores/currentUser';
import './style.css';

class List extends Component {
  handleClick = (e, id) => {
    e.preventDefault();
    const { requestUser } = this.props;
    console.log('click');
    requestUser(id);
  }

  render() {
    const { users, keyWord } = this.props;

    const content = users.length === 0
      ? <li>{keyWord !== '' ? 'No matches!' : 'No data yet'}</li>
      : (
        users.map((user, i) => {
          return <li onClick={(e) => this.handleClick(e, user.id)} key={user.id}><a href="">{user.email}</a></li>
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

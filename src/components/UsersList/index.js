import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { FormControl } from 'react-bootstrap';
import List from './list'
import UsersStore from '../../stores/UsersStore';
import './style.css'


const UsersContainer = observer(class UsersContainer extends Component {

  state = {
    keyWord: ''
  }

  componentDidMount() {
    UsersStore.loadUsers();
  }

  handleFilter = (e) => {
    const { value } = e.target;

    this.setState({ keyWord: value })
  }

  renderUsersList = (users) => {
    const { keyWord } = this.state;

    const filtered = users
      .filter(user => {
        return keyWord === '' || user.email.includes(keyWord);
      })

      return <List users={filtered} keyWord={keyWord}/>
  }

  render() {
    const { users} = UsersStore;
    return (
      <div className="users-container">
        <div className="search-input">
          <FormControl
            type="text"
            className="keyword-input"
            value={this.state.keyWord}
            onChange={this.handleFilter}
            placeholder="Enter keyword"/>
        </div>
        {this.renderUsersList(users)}
      </div>
    )
  }
})

export default UsersContainer;

import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { FormControl, FormGroup } from 'react-bootstrap';
import List from './list'
import UsersStore from '../../stores/UsersStore';
import './style.css'


class UsersContainer extends Component {

  state = {
    keyWord: ''
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ users: nextProps.users })
  }

  componentDidMount() {
    UsersStore.loadUsers();
  }

  handleFilter = (e) => {
    const { value } = e.target;

    this.setState({ keyWord: value })
  }

  renderUsersList = () => {
    const { users } = UsersStore;
    const { keyWord } = this.state;

    const filtered = users
      .filter(user => {
        return keyWord === '' || user.includes(keyWord);
      })

      return <List users={filtered}/>
  }

  render() {
    return (
      <div className="users-container">
        <div className="search-input">
          <input
            value={this.state.keyWord}
            onChange={this.handleFilter}
          />
        </div>
        {this.renderUsersList()}
      </div>
    )
  }
}

export default observer(UsersContainer);

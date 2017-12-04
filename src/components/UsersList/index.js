import React, { Component } from 'react'
import { observer, Observer } from 'mobx-react';
import { FormControl } from 'react-bootstrap';
import List from './list'
import UsersStore from '../../stores/UsersStore';
import './style.css'


class UsersContainer extends Component {

  state = {
    keyWord: ''
  }

  componentDidMount() {
    this.props.requestUsers();
  }

  handleFilter = (e) => {
    const { value } = e.target;

    this.setState({ keyWord: value })
  }

  renderUsersList = (users) => {
    const { keyWord } = this.state;
    const { requestUser } = this.props;

    const filtered = users
      .filter(user => {
        return keyWord === '' || user.attributes.email.includes(keyWord);
      })

      return <List requestUser={requestUser} users={filtered} keyWord={keyWord}/>
  }

  render() {
    const { users} = this.props;

    return (
      <Observer>
        {() =>
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
        }
      </Observer>
    )
  }
}

export default UsersContainer;

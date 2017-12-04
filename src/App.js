import React, { Component } from 'react';
import Content from './content';
import UsersList from './components/UsersList/index.js';
import { requestUser } from './services/user';
import { requestUsers } from './services/users';

import { observer } from "mobx-react";

import Header from './header';
import './App.css';

class App extends Component {
  state = {
    user: {},
    users: [],
    subs: [],
    master: [],
    reviewers: []
  }

  requestUser = async (id) => {
    const { users } = this.state;
    const user = await requestUser(id)

    const norm = user && user.data && {
      id: user.data.id,
      ...user.data.attributes
    }

    const subs = users.filter(user => {
      return user['subscriber-ids'].findIndex(id => {
        return ''+norm.id === ''+id
      }) > -1
    })
    console.log('?????', subs);
    const master = users.filter(user => {
      return user['reviewer-ids'].findIndex(id => {
        return ''+norm.id === ''+id
      }) > -1
    })

    this.setState({ user: norm, subs, master })
  }

  requestUsers = async () => {
    const users = await requestUsers()

    const norm = users.data.map(user => ({...user.attributes, id: user.id}))

    this.setState({ users: norm })
  }

  render() {
    const { user, users, subs, master } = this.state;

    return (
      <div className="App">
        <Header />
        <UsersList users={users} requestUsers={this.requestUsers} requestUser={this.requestUser} />
        <Content subs={subs} user={user} master={master} />
      </div>
    );
  }
}

export default observer(App);

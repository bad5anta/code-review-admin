import React, { Component } from 'react';
import Form from './form';
import currentUser from '../stores/currentUser';

import './style.css';

class Content extends Component {
  render() {
    const { user, users, subs, master } = this.props;

    return (
      <main>
          <Form subs={subs} user={user} users={users} master={master} />
      </main>
    );
  }
}

export default Content;

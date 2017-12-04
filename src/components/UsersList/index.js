import React, { Component } from 'react'
import { observer } from 'mobx-react';
import UsersStore from '../../stores/UsersStore';

class UsersContainer extends Component {
    render() {
        const { users } = UsersStore;
        return (
            <div className="users-container">
                {users}
            </div>
        )
    }
}

export default observer(UsersContainer);

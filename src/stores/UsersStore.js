import { observable, action } from "mobx";
import { requestUsers } from '../services/users';

class UserStore {
  users = observable([]);

  loadUsers =  action(async () => {
    const users = await requestUsers();

    this.users = users;
  })
}

export default new UserStore();

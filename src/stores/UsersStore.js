import { observable, computed } from "mobx";
import { requestToken } from '../services/users';

class UserStore {
  users = observable(['user1', 'user2', 'user3', 'user4']);

  something = computed(() => {
    return this.users = [...this.users, 123]
  })

  loadUsers = async () => {
    const response = await requestToken();
  }
}

export default new UserStore();

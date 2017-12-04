import { observable, computed } from "mobx";

class UserStore {
  users = observable(['1', 2, 3, 4]);

  something = computed(() => {
    return this.users = [...this.users, 123]
  })

  loadUsers = () => {
    
  }
}

export default new UserStore();

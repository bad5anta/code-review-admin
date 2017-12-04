import { observable, action } from "mobx";
import { requestUser } from '../services/user';

class currentUser {
  user = observable({});

  requestUser = action(async (id) => {
    const user = await requestUser(id);

    this.user = user;
  })
}

export default new currentUser();

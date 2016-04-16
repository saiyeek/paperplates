import Axios from 'axios';

class UserService {
  loadUser {
    Axios.get('/user/me');
  }
}

export UserService;

import Axios from 'axios';

function UserService() {

}

UserService.prototype.loadUser = () => {
  return Axios.get('/me').then((response) => response.data);
}


module.exports.UserService = UserService;

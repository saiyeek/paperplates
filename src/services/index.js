import Axios from 'axios';

function UserService() {

}

UserService.prototype.loadUser = () => {
  return Axios.get('/me').then((response) => response.data);
}

UserService.prototype.logoutUser = () => {
  return Axios.post('/auth/logout')
}
module.exports.UserService = UserService;

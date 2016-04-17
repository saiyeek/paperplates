import Axios from 'axios';

function UserService() {

}

UserService.prototype.loadUser = () => {
  return Axios.get('/me').then((response) => response.data);
}

UserService.prototype.logoutUser = () => {
  return Axios.post('/logout')
}

/**
Menu Service
*/

function MenuService() {
}

MenuService.prototype.fetchMenus = () => {
  return Axios.get('/menus').then(response => response.body)
}


// Export everything
module.exports = {
  UserService,
  MenuService
}

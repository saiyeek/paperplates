import Axios from 'axios';

function UserService() {

}

UserService.prototype.loadUser = () => {
  return Axios.get('/me').then((response) => response.data);
}

UserService.prototype.logoutUser = () => {
  return Axios.post('/logout')
}

UserService.prototype.beHost = (userId) => {
  return Axios.put(`/users/${userId}`, {type: "host"})
  .then(response => response.data)
}
/**
Menu Service
*/

function MenuService() {
}

MenuService.prototype.fetchMenus = () => {
  return Axios.get('/menus').then(response => response.body)
}


/**
Menu Service
*/

function MealService() {
}

MealService.prototype.fetchMeals = () => {
  return Axios.get('/meals?populate=menu reservations').then(response => response.data)
}


// Export everything
module.exports = {
  UserService,
  MenuService,
  MealService
}

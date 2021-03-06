
var mongoose = require('mongoose');

var MONGO_URI = "mongodb://api-user:GuSYSyVAYze4p9aH@ds011231.mlab.com:11231/paper_plate_meals";
var MONGO_OPTIONS = {
  server: {
    poolSize: 4,
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    poolSize: 4,
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  }
};

var conn = mongoose.createConnection(MONGO_URI, MONGO_OPTIONS);

var models = {
	Menu: require('./menu.js')(conn),
	User: require('./user.js')(conn),
	Meal: require('./meal.js')(conn),
      Location: require('./location.js')(conn),
      Rating: require('./rating.js')(conn),
      Reservation: require('./reservation.js')(conn)
};

module.exports = models;

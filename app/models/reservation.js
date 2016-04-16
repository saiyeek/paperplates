var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var schema = new mongoose.Schema({
    diner : { type: ObjectId, ref: 'user' },
    meal: { type: ObjectId, ref: 'meal'},
    people_count : Number,
	created: {
		type: Date,
		default: Date.now
	},
		updated: {
		type: Date,
		default: null
	}
}, {
 collection: 'Reservation',
 autoIndex: false
});

schema.pre('save', function(next) {
  this.updated = new Date();
  next();
});

module.exports = function(conn) {
 conn.model('reservation', schema);
 return conn.model('reservation');
}

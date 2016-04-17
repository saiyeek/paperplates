var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var schema = new mongoose.Schema({
    menu: { type: ObjectId, ref: 'menu' },
	date: Date,
	available_spots: Number,
	location: { type: ObjectId, ref: 'location', default: null },
	reservations: [{ type: ObjectId, ref: 'reservation' }],
	created: {
		type: Date,
		default: Date.now
	},
		updated: {
		type:  Date,
		default: null
	}
}, {
 collection: 'Meal',
 autoIndex: false
});

schema.pre('save', function(next) {
  this.updated = new Date();
  next();
});

module.exports = function(conn) {
 conn.model('meal', schema);
 return conn.model('meal');
}

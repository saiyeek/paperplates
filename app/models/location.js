var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var schema = new mongoose.Schema({
    street: String,
    unit: String,
    city: String,
    state: String,
    zip: String
}, {
 collection: 'Location',
 autoIndex: false
});

schema.pre('save', function(next) {
  this.updated = new Date();
  next();
});

module.exports = function(conn) {
 conn.model('location', schema);
 return conn.model('location');
}
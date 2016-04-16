var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var schema = new mongoose.Schema({
    email : String,
    first_name : String,
    last_name : String,
    type : { type: String, enum: ['host', 'diner'] },
    facebook_id : Number
}, {
 collection: 'User',
 autoIndex: false
});


schema.pre('user', function(next) {
 next();
});

module.exports = function(conn) {
 conn.model('user', schema);
 return conn.model('user');
}

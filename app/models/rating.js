var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var schema = new mongoose.Schema({
  rater: { type: ObjectId, ref: 'user' },
  rating_for : { type: String, enum: ['user', 'menu'] },
  rated_user: { type: ObjectId, ref: 'user' },
  rated_menu: { type: ObjectId, ref: 'menu' },
  rating: { type: Number, enum: [1, 2, 3, 4, 5] },
  created: {
      type: Date,
      default: Date.now
  },
      updated: {
      type: Date,
      default: null
  }
}, {
 collection: 'Rating',
 autoIndex: false
});

schema.pre('save', function(next) {
  this.updated = new Date();
  next();
});

module.exports = function(conn) {
 conn.model('rating', schema);
 return conn.model('rating');
}
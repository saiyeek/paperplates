var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var schema = new mongoose.Schema({
    email: String,
    first_name: String,
    last_name: String,
    type: {
        type: String,
        enum: ['host', 'diner']
    },
    facebook_meta: Mixed,
    facebook_id: String,
    twitter_id: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: null
    }
}, {
    collection: 'User',
    autoIndex: false
});

schema.pre('save', function(next) {
    this.updated = new Date();
    next();
});

module.exports = function(conn) {
    conn.model('user', schema);
    return conn.model('user');
}

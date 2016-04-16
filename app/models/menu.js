var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var schema = new mongoose.Schema({
    host: {
        type: ObjectId,
        ref: 'user'
    },
    title: String,
    images: [String],
    price: Number,
    description: String,
    items: [{
        item: String,
        ingredients: String
    }],
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: null
    }
}, {
    collection: 'Menu',
    autoIndex: false
});

schema.pre('save', function(next) {
    this.updated = new Date();
    next();
});

module.exports = function(conn) {
    conn.model('menu', schema);
    return conn.model('menu');
}

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var schema = new mongoose.Schema({
    user: { type: ObjectId, ref: 'user' },
    title : String,
    images : [String],
    price : Number,
    description : String,
    items : [
        {
            item : String,
            ingredients : String
        }
    ]
}, {
 collection: 'Menu',
 autoIndex: false
});


schema.pre('save', function(next) {
 next();
});

module.exports = function(conn) {
 conn.model('menu', schema);
 return conn.model('menu');
}

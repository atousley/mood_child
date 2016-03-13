var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var visionSchema = new Schema({
    "date": Date,
    "current_book": {
        "title": String,
        "author": String
    },
    "reading_list": [
        {"title": String, "author": String}
    ],
    "delight": [
        {"delight": String}
    ],
    "thoughts": [
        {"thought": String}
    ],
    "travel": [
        {"travel": String}
    ],
    "current_career": [
        {"objective": String}
    ],
    "future_career": [
        {"objective": String}
    ]
});

module.exports = mongoose.model('visionBoard', visionSchema);
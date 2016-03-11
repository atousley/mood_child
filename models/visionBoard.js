var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var visionSchema = new Schema({
    "current_book": {
        "title": String,
        "author": String
    },
    "reading_list": [
        {"title1": String, "author1": String}
    ]
});

module.exports = mongoose.model('visionBoard', visionSchema);
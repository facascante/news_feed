var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var newsSchema = new Schema({
    news: {
        type : String,
        required : true
    },
    publish : {
        type: Boolean, 
        default: true
    },
    created : { 
        type: Date, 
        default: Date.now 
    }
});

var News = mongoose.model('Blog',newsSchema);

module.exports = {
	News : News
};

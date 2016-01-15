var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('config');

mongoose.connect(config.get('mongo_url'));

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

var News = mongoose.model(config.get('news_table'),newsSchema);

module.exports = {
	News : News
};

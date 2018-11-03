const mongoose = require('mongoose');

mongoose.connect('MONGOURL',{useNewUrlParser: true}); // connect on mongodb atlas cluster

mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = mongoose;

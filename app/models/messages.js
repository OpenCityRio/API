const mongoose = require('../database');

const messageSchema = new mongoose.Schema({
	id:{
		type: String,
		unique: true,
		required: true
	},
	from:{
		type: String,
		required: true
	},
	to:{
		type: String,
		required: true
	},
	type:{
		type: String,
		required: true
	},
	content:{
		type: String,
		required: true
	}
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
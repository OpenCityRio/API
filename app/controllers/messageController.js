const express = require('express');
const message = require('../models/messages');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res) =>{
	try{
		const message = await message.create(req.body);

		return res.send({message});
	}
	catch(err){
		console.log(err);
        return res.status(400).send( { error: 'Registration failed' } );
	}
});

module.exports = app => app.use('/message', router);
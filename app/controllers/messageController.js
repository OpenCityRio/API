const express = require('express');
const Message = require('../models/messages');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res) =>{
	try{
		const message = await Message.create(req.body);
		return res.send({message});
	}
	catch(err){
        return res.status(400).send( { error: 'Registration failed' } );
	}
});

router.get('/', async (req, res) =>{
	try{
		const message = await Message.find();
		return res.send({message});
	}
	catch(err){
		return res.status(400).send({error: 'Error loading messages'});
	}
});

router.get('/:messageId', async (req, res)=>{
	try{
		const singleMessage = await Message.findById(req.params.messageId);
		return res.send({singleMessage});
	}
	catch(err){
		return res.status(400).send({error: 'Error loading single message'});
	}
});

module.exports = app => app.use('/message', router);

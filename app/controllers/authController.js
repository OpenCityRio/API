const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res)=>{
    const {cpf} = req.body;

    try{
        if(await User.findOne({cpf}))
            return res.status(400).send({error: 'User already exists'});

        const user = await User.create(req.body);
        
        user.password = undefined;

        return res.send({ user });
    }
    catch(err){
        console.log(err);
        return res.status(400).send( { error: 'Registration failed' } );
    }
});

router.post('/authenticate', async (req, res)=>{
    const{email, password} = req.body;

    const user = await User.findOne({cpf}).select('+password');

    if(!user)
        res.status(400).send({error: 'User not found'});

    if(!await bcrypt.compare(password, user.password))
        res.status(400).send({error: 'Invalid password'});
    
    user.password = undefined;

    return res.send({user});
});


module.exports = app => app.use('/auth', router);

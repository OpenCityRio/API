const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./app/controllers/authController')(app);
require('./app/controllers/messageController')(app);

app.get('/', (req, res) =>{
    res.send('Welcome to hack API');
});

app.listen(3005);
console.log('Server on!');
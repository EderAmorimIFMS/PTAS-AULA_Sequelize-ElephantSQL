const express = require('express');
const connection = require('./config/connection');
const User = require('./model/user');
const app = express();
app.use(express.json())
const port = process.env.PORT || 3003;
const userController = require('./controller/userControler')

app.listen(port, () => { 
    console.log(`Run server...${port}`) 
});

app.post('/user', userController.createUser);

app.get('/', userController.findAllUser);



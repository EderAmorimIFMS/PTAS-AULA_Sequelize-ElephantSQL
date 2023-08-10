const express = require('express');
const routes = express.Router();

const userController = require('../controller/userControler')


routes.post('/user', userController.createUser);

routes.get('/', userController.findAllUser);

routes.get('/user', userController.findOneUser);

routes.delete('/user/:id', userController.deletUser);

routes.put('/user/:id', userController.updateUser);

routes.post('/user/authenticated', userController.authenticatedUser);


module.exports = routes;

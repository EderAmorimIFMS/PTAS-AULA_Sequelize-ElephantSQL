const { name } = require('../model/user');
const User = require('../model/user');
const secret = require('../config/auth.json');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        await User.create({
            name: name,
            password: password,
            email: email
        });

        console.log('Cadastro de usuário realizado com sucesso!');
        return res.json('Cadastro de usuário realizado com sucesso!');

    } catch (error) {
        console.log(`Ops, deu erro: ${erro}`);
        res.error();

    };
}

const findAllUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.json(user);

    } catch (error) {
        return res.json('Usuários não encontrados!');

    }
}

const findOneUser = async (req, res) => {
    const id = req.body.id;

    try {
        const user = await User.findOne({
            where: {
                id: id
            }
        });

        return res.json(user); 

    } catch (error) {
        return res.json('Usuário não encontrado!');

    };
}

const deletUser = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await User.destroy({
            where: {
                id: id
            }
        });

        res.json('Usuário apagado com sucesso!');
        console.log('Usuário apagado com sucesso!');
        
    } catch (error) {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);

    };
}

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, password, email } = req.body;

    try {
        await User.update({
            name: name,
            password: password,
            email: email
        },{
            where: {
                id: id
            } 
        });

        res.json('Usuário atualizado com sucesso!');
        console.log('Usuário atualizado com sucesso!');
        
    } catch (error) {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);

    };
}

const authenticatedUser = async (req, res) => {
    const { email, password } = req.body;

    try{
        const isAuthenticated =  await User.findOne({
            where: {
                email: email,
                password: password
            }
        });

        const token = jwt.sign({
            id: email

        }, secret.secret, {
            expiresIn: 86400,

        });

        return res.json({
            name: isAuthenticated.name,
            email: isAuthenticated.email,
            token: token
        
        });

    } catch (error) {
        return res.json("Usuário não encontrado!");

    };
}

module.exports = { createUser, findAllUser, findOneUser, deletUser, updateUser, authenticatedUser };
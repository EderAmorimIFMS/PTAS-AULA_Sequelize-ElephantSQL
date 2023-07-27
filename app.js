const express = require('express');
const connection = require('./config/connection');
const User = require('./model/user');
const app = express();
app.use(express.json())
const port = process.env.PORT || 3003;

app.listen(port, () => { 
    console.log(`Run server...${port}`) 
});

app.get('/', (req, res) => {
    res.send("Api - USER CRIADO ");
})

app.post('/user', (req, res) => {
    const { name, password, email } = req.body;
    User.create({
        name: name,
        password: password,
        email: email,
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        console.log(`Ops, deu erro: ${erro}`);
    })
})
const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('express-flash');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use(flash());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/form', (req, res) => {
    let { email, name, pontos } = req.body;

    let emailError;
    let nameError;
    let pontosError;

    if(email == undefined || email == '') {
        emailError = 'O campo e-mail não pode ser vazio';
    }

    if(name == undefined || name == '') {
        nameError = 'O nome não pode ser vazio';
    }

    if(name.length < 4) {
        nameError = 'O nome é muito pequeno';
    }

    if(pontos == undefined || pontos < 20) {
        pontosError = 'Você não pode ter menos de 20 pontos';
    }

    if(emailError != undefined || pontosError != undefined || nameError != undefined) {
        res.redirect('/');
    } else {
        res.send('Funfou!');
    }
});

app.listen(3000,(req, res) => {
    console.log('Servidor inicializado com sucesso!');
});
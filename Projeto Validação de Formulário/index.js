const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser('asoijaehiuah'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(flash());

app.get('/', (req, res) => {
    let emailError = req.flash('emailError');
    let nameError = req.flash('nameError');
    let pontosError = req.flash('pontosError');
    let email = req.flash('email');

    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
    email = (email == undefined || email.length == 0) ? '' : email;

    res.render('index', { emailError, nameError, pontosError, email: email });
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
        req.flash('emailError', emailError);
        req.flash('nameError', nameError);
        req.flash('pontosError', pontosError);
        req.flash('email', email);

        res.redirect('/');
    } else {
        res.send('Funfou!');
    }
});

app.listen(3000,(req, res) => {
    console.log('Servidor inicializado com sucesso!');
});
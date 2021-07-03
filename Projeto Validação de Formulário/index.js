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
    console.log('Funfando!');
    res.send('Funfando!');
});

app.listen(3000,(req, res) => {
    console.log('Servidor inicializado com sucesso!');
});
const express = require('express');
const app = express();
const connection = require('./database/database');
const categoriesController = require('./categories/CategoriesController.js');
const articlesController = require('./articles/ArticlesController.js');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connection
    .authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso!')
    }).catch((error) => {
        console.log(error);
    });

app.use('/', categoriesController);

app.use('/', articlesController);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8080, () => {
    console.log('Servidor iniciado com sucesso!');
});
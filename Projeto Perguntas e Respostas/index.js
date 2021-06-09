const express = require("express");
const app = express();
const connection = require('./database/database');
const perguntaModel = require('./database/Pergunta');

connection
    .authenticate()
    .then(() => {
        console.log("Conexão efetuada com sucesso!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    res.send(`Formulário recebido com sucesso! ${titulo} ${descricao}`);
});

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso!");
});
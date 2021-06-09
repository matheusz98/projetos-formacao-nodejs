const express = require("express");
const app = express();
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');

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
    Pergunta.findAll({ raw: true, order: [
        ['id', 'DESC']
     ]}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    });
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

app.get("/pergunta/:id", (req, res) => {
    const id = req.params.id;
    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if(pergunta != undefined) {
            res.render("pergunta");
        } else {
            res.redirect("/");
        }
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso!");
});
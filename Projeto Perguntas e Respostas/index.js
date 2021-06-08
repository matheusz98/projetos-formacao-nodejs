const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const nome = "Matheus";
    const linguagem = "JavaScript";
    const exibirMsg = true;
    const produtos = [
        {nome: "Cheetos", preco: 3.14},
        {nome: "Monster", preco: 7},
        {nome: "Fanta Laranja", preco: 4},
    ];
    res.render("index", {
        nome: nome,
        linguagem: linguagem,
        msg: exibirMsg,
        produtos: produtos,
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso!");
});
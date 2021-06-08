const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const nome = "Matheus";
    const linguagem = "JavaScript";
    const exibirMsg = true;
    res.render("index", {
        nome: nome,
        linguagem: linguagem,
        msg: exibirMsg
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso!");
});
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const nome = "Matheus";
    const linguagem = "JavaScript";
    res.render("index", {
        nome: nome,
        linguagem: linguagem,
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso!");
});
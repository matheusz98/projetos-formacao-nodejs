const fs = require('fs');

const conteudo;

fs.readFile('./matheus.costa', { encoding: 'utf-8' }, (error, data) => {
    if(error) {
        console.log("Deu ruim");
    } else {
        conteudo = data;
    }
});
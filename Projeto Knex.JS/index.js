const database = require('./database');

/* INSERT DE DADOS 
const dados = {
    nome: 'God of War',
    preco: 40
}

const dados = [
    {
        nome: 'Death Stranding',
        preco: 80.50
    },

    {
        nome: 'Bloodborne',
        preco: 30
    },

    {
        nome: 'God of War',
        preco: 40
    }
]
*/

database.insert(dados).into('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
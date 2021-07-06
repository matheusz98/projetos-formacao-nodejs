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

database.insert(dados).into('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* SELECT
database.select().table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

Caso quiser selecionar campos específicos
database.select('id, preco').table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* Inserindo dados e selecionando (Nested Queries)
database.insert({nome: 'Persona 5 Royal', preco: 35}).into('games').then(data => {
    database.select(['id', 'preco']).table('games').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});
*/

/* SELECT
database.select()
    .whereRaw("nome = 'Death Stranding'")
    .table('games').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

Com operações like, !=, >, 
database.select(['id', 'nome'])
    .whereRaw('preco > 50')
    .table('games').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
<*/

/* DELETE
database.where({id: 3}).delete().table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* UPDATE
database.where({ id: 1 }).update({ preco: 50}).table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* Order by
database.select().table('games').orderBy('nome', 'asc').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/
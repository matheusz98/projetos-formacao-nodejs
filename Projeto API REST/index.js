const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const DB = {
    games: [
        { 
            id: 1,
            title: 'Metal Gear Solid 4: Guns of the Patriots',
            year: 2008,
            price: 30,
        },

        { 
            id: 2,
            title: 'Red Dead Redemption II',
            year: 2018,
            price: 50,
        },

        { 
            id: 3,
            title: 'Persona 5 Royal',
            year: 2020,
            price: 40,
        },
    ]
}

app.get('/', () => {

});

app.listen(3000, () => {
    console.log('Servidor inicializado com sucesso!');
})
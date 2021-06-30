const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
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

app.get('/games', (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get('/game/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);

        const game = DB.games.find(game => game.id == id);

        if(game != undefined) {
            res.statusCode = 200;
            res.json(game);
        } else {
            res.sendStatus(404);
        }
    }
});

app.post('/game', (req, res) => {
    const { title, price, year } = req.body;

    DB.games.push({
        id: 4,
        title,
        price,
        year
    });

    res.sendStatus(200);
});

app.delete('/game/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        var index = DB.games.findIndex(game => game.id == id);

        if(index == -1) {
            res.sendStatus(404);
       } else {
           DB.games.splice(index, 1);
           res.sendStatus(200);
       }
    }
});

app.put('/game/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);

        const game = DB.games.find(game => game.id == id);

        if(game != undefined) {
            const { title, price, year } = req.body;

            if(title != undefined) {
                game.title = title;
            }

            if(price != undefined) {
                game.price = price;
            }

            if(year != undefined) {
                game.year = year;
            }

            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    }
});

app.listen(3000, () => {
    console.log('Servidor inicializado com sucesso!');
})
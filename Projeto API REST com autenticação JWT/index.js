const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

const JWTSecret = 'asjaoije498dsaw894ca651w8ADSFSETHJ15098';

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function auth(req, res, next) {
    const authToken = req.headers['authorization'];
    
    if(authToken != undefined) {
        const bearer = authToken.split(' ');
        const token = bearer[1];

        jwt.verify(token, JWTSecret, (error, data) => {
            if(error) {
                res.status(401);
                res.json({ error: 'Token inválido!'});
            } else {
                req.token = token;
                req.loggedUser = { id: data.id, email: data.email};
                next();
            }
        });
    } else {
        res.status(401);
        res.json({ error: 'Token inválido!'});
    }
}

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
    ],

    users: [
        {
            id: 1,
            name: 'Matheus Costa',
            email: 'matheus@gmail.com',
            password: '784512js'
        },
        {
            id: 2,
            name: 'Guilherme Fidelis',
            email: 'fidelisamigao@gmail.com',
            password: '9841561db',
        }
    ]
}

app.get('/games', auth, (req, res) => {
    res.statusCode = 200;
    res.json({ user: req.loggedUser, games: DB.games });
});

app.get('/game/:id', auth, (req, res) => {
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

app.post('/game', auth, (req, res) => {
    const { title, price, year } = req.body;

    DB.games.push({
        id: 4,
        title,
        price,
        year
    });

    res.sendStatus(200);
});

app.delete('/game/:id', auth, (req, res) => {
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

app.put('/game/:id', auth, (req, res) => {
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

app.post('/auth', auth, (req, res) => {
    const { email, password } = req.body;

    if(email != undefined) {
        const user = DB.users.find(u => u.email == email);

        if(user != undefined) {
            if(user.password == password) {
                jwt.sign({ id: user.id, email: user.email }, JWTSecret, { expiresIn: '48h'}, (error, token) => {
                    if(error) {
                        res.status(400);
                        res.json({ error: 'Falha interna'});
                    } else {
                        res.status(200);
                        res.json({ token: token });
                    }
                });
            } else {
                res.status(401)
                res.json({ error: 'Credenciais inválidas!'});
            }
        } else {
            res.status(404)
            res.json({ error: 'O e-mail informado não existe em nosso banco de dados'});
        }
    } else {
        res.status(400);
        res.json({ error: 'O e-mail informado é inválido'});
    }
});

app.listen(3000, () => {
    console.log('Servidor inicializado com sucesso!');
})
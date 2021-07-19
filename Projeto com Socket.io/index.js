const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    socket.on('boasvindas', (data) => {
        console.log('Executando evento de boas vindas');
        console.log(data);
    });
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

http.listen(3000, () => {
    console.log('Aplicação inicializada com sucesso!');
});
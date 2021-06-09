const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'bdmatheus7845120#', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
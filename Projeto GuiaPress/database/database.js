const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root', 'bdmatheus7845120#', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
const Sequelize = require("sequelize")

const connection = new Sequelize('Put the name of the database here!', 'root', 'Put the database password here!', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
})

module.exports = connection;
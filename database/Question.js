const Sequelize  = require("sequelize")
const connection = require("./database")


const Question = connection.define('question', {
    first:{
        type: Sequelize.STRING,
        allowNull: false
    },
    last:{
        type: Sequelize.STRING,
        allowNull: false
    },
    country:{
        type: Sequelize.STRING,
        allowNull: false
    },
    city:{
        type: Sequelize.STRING,
        allowNull: false
    },
    textarea:{
        type: Sequelize.TEXT,
        allowNull: false
    },
})

Question.sync({force:false}).then(() =>{
    console.log("Created Table!")
})

module.exports = Question;
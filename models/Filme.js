const { DataTypes} = require ('sequelize')

const db = require('../db/conn')

// Tabela no banco
const Filmes = db.define('Filmes', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true  
    },
    titulo: {
        type: DataTypes.STRING,//tipo string
        require: true//Não aceita valores vazios
    },
    description: {
        type: DataTypes.STRING,//tipo string
        require: true//Não aceita valores vazios
    },
    categoria: {
        type: DataTypes.STRING,//tipo string
        require: true//Não aceita valores vazios
    }
})



// Exports module
module.exports = Filmes
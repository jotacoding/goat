import Sequelize from "sequelize"
import { connection } from "../database/connection.js"

export const filmes = connection.define('filmes', {

    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    diretor: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    img: {
        type: Sequelize.STRING(5000),
        allowNull: false
    },
    duracao: {
        type: Sequelize.INTEGER(4),
        allowNull: false
    },
    ano: {
        type: Sequelize.STRING(4),
        allowNull: false
    },
    iframe: {
        type: Sequelize.STRING(5000),
        allowNull: true
    },
    sinopse: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    assista: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    nota: {
        type: Sequelize.STRING(4),
        allowNull: false
    }

}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
})


const initTable = async () => {
    try {
        await filmes.sync()
    }
    catch(error){
        error.message
    }
}
initTable()

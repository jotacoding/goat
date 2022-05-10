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
        type: Sequelize.STRING(),
        allowNull: false
    },
    duracao: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false
    },
    iframe: {
        type: Sequelize.STRING,
        allowNull: true
    },
    sinopse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    assista: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nota: {
        type: Sequelize.STRING,
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

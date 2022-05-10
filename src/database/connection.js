import Sequelize from "sequelize"
import dotenv from 'dotenv'

dotenv.config()


export const connection = new Sequelize(
    'postgres://filmes_bp20_user:Gw4nWCtdtSnvRORUmwfrqC3ocEZG77RO@dpg-c9sriarru51ph66f7an0-a.oregon-postgres.render.com/filmes_bp20',
    
   {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

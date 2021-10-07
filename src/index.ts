import { Transaction } from './entities/Transaction';
import { createConnection } from 'typeorm'
import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import express from 'express'

const app = express()
const port = process.env.PORT || 8080


const main = async () => {
    try {
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'anA56sz3*P112',
            database: 'typeorm',
            entities: [Client, Banker, Transaction],
            synchronize:true
        })
        console.log('connected to postgres')
        app.listen(port, ()=> console.log(`express app running on port ${port}`))
    } catch (error) {
        console.log('error connecting to postgres');
        throw new Error("error connecting to postgres")
    }
}

main();
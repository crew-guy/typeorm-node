import { createConnection } from 'typeorm'
import { Client } from './entities/Client';

const main = async () => {
    try {
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'anA56sz3*P112',
            database: 'typeorm',
            entities: [Client],
            synchronize:true
        })
        console.log('connected to postgres')
    } catch (error) {
        console.log('error connecting to postgres');
        throw new Error("error connecting to postgres")
    }
}

main();
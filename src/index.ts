import { createConnection } from 'typeorm'

const main = async () => {
    try {
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'anA56sz3*P112',
            database:'typeorm'
        })
        console.log('connected to postgres')
    } catch (error) {
        console.log('error connecting to postgres');
        throw new Error("error connecting to postgres")
    }
}

main();
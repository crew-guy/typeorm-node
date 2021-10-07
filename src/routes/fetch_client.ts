import { Client } from './../entities/Client';
import express from 'express'
import { createQueryBuilder } from 'typeorm';

const router = express.Router()

router.get('/api/clients', async (req, res) => {
    const clients = await Client.find()

    return res.json(clients)
})

router.get('/api/clients/:clientId', async (req, res) => {
    const {clientId} = req.params

    const client = await Client.findOne(clientId)

    return res.json(client)
})

router.get('/api/clients/min/:minBalance/max/:maxBalance', async (req, res) => {
    const { minBalance, maxBalance } = req.params
    
    const clients = await createQueryBuilder(
        'client'
    )
    .select('client.first_name')
    .addSelect('client.last_name')
    .from(Client, 'client')
    .where('client.balance >= :minBalance AND client.balance <= :maxBalance', {minBalance:parseInt(minBalance), maxBalance:parseInt(maxBalance)})
    .getMany()
    
    return res.json(clients)
})

export {
    router as fetchClientRouter
}
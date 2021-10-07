import { Client } from './../entities/Client';
import { Transaction, TransactionType } from './../entities/Transaction';
import express from 'express'

const router = express.Router()

router.post('/api/client/:clientId/transaction', async (req, res) => {
    const { clientId } = req.params
    
    const { type, amount } = req.body

    const client = await Client.findOne(parseInt(clientId))

    if (!client) {
        return res.json({
            msg:'client not found'
        })
    }

    const transaction = await Transaction.create({
        type,
        amount:parseInt(amount),
        client
    })

    await transaction.save()

    if (type == TransactionType.WITHDRAW) {
        client.balance -= parseInt(amount)
    } else if (type == TransactionType.DEPOSIT) {
        client.balance += parseInt(amount)
    }

    await client.save()

    return res.json({
        msg:'transaction added'
    })
})

export {
    router as createTransactionRouter
}
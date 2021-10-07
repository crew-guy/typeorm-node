import { Banker } from './../entities/Banker';
import { Client } from './../entities/Client';
import express from 'express'

const router = express.Router()

router.post('/api/banker/:bankerId/client/:clientId', async (req, res) => {
    const { bankerId, clientId } = req.params
    
    const client = await Client.findOne(parseInt(clientId))
    const banker = await Banker.findOne(parseInt(bankerId))

    if (!client || !banker) {
        return res.json({
            msg:"Client or banker is not known"
        })
    }

    banker.clients = [
        client
    ]

    await banker.save()

    return res.json(banker);
})

export {
    router as connectBankerToClientRouter
}
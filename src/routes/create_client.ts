import { Client } from './../entities/Client';
import express from 'express'

const router = express.Router()

router.post('/api/client',async (req, res) => {
    const {
        firstName,
        lastName,
        middleName,
        cardNumber,
        balance,
        isActive,
        familyMembers,
        additionalInfo
    } = req.body

    const client = Client.create({
        first_name: firstName,
        last_name: lastName,
        middle_name: middleName,
        balance,
        card_number: cardNumber,
        is_active:isActive,
        family_members: familyMembers,
        additional_info:additionalInfo
    })

    await client.save()

    return res.json(client)

})

export {
    router as createClientRouter
}   
import { Banker } from './../entities/Banker';
import express from 'express'

const router = express.Router()

router.post('/api/banker', async (req, res) => {
    const {
        firstName,
        middleName,
        lastName,
        cardNumber,
        employeeNumber
    } = req.body

    const banker = Banker.create({
        first_name: firstName,
        last_name: lastName,
        middle_name: middleName,
        card_number: cardNumber,
        employee_number:employeeNumber
    })

    await banker.save()

    return res.json(banker)
})

export {
    router as createBankerRouter
}
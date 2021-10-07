import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

enum TransactionTypes {
    WITHDRAW = "withdraw",
    DEPOSIT = 'deposit'
}

Entity('transactions')
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
        id: number
    
    @Column({
        type: "enum",
        enum:TransactionTypes
    })
        type: string
    
    @Column({
        type:"numeric"
    })
        amount:number
    
}
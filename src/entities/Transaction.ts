import { Client } from './Client';
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

export enum TransactionType {
    WITHDRAW = "withdraw",
    DEPOSIT = 'deposit'
}

@Entity('transactions')
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
        id: number
    
    @Column({
        type: "enum",
        enum:TransactionType
    })
        type: string
    
    @Column({
        type:"numeric"
    })
        amount:number
    
    
    @ManyToOne(
        () => Client,
        client => client.transactions,
        {
            onDelete:'CASCADE'
        }
    )
    @JoinColumn({
        name:'client_id'
    })
    client:Client
}
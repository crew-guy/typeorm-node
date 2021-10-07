import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class Person extends BaseEntity{
    @PrimaryGeneratedColumn()
        id: number
    
    @Column()
        first_name:number
        
    @Column()
        last_name: number

    @Column({
        unique: true,
        length:10
    })
        card_number:string
}
import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm'

@Entity()
export class Person extends BaseEntity{
    @PrimaryColumn()
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
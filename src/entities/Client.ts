import { Column, Entity, BaseEntity } from "typeorm"

@Entity("client")
class Client extends BaseEntity {
    @Column({
        unique:true
    })
    email: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string
    
    @Column({
        unique: true,
        length:10
    })
    card_number: string

    @Column({
        type:'numeric'
    })
    balance: number
    
    @Column({
        default:true
    })
    is_active:boolean
    
    @Column({
        type: 'simple-json',
        nullable:true
    })
    additional_info: {
            age: number,
            hair_color:string
    }
}
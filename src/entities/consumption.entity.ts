import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { Payment } from "./payment.entity";

@Entity()
export class Consumption {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    date : Date

    @Column()
    consumption : number

    @ManyToOne(() => Client, (client) => client.consumption)
    client : Client

    @OneToMany(() => Payment, (payment) => payment.consumption)
    payment: Payment[]
}
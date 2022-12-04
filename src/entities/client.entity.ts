import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Consumption } from "./consumption.entity";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name : string

    @Column()
    mail : string

    @Column()
    phone : string

    @Column()
    address : string

    @Column({ type: 'date'})
    birthdate : Date

    @OneToMany(() => Consumption, (consumption) => consumption.client)
    consumption: Consumption[]
}
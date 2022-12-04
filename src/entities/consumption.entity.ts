import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

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
}
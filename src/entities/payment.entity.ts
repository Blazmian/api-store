import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Consumption } from "./consumption.entity";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Consumption, (consumption) => consumption.payment)
    consumption : Consumption

    @Column('double')
    total : number

    @Column({ default: false })
    paid : boolean
}
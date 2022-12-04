import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Consumption } from "./consumption.entity";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Consumption)
    @JoinColumn()
    consumption : Consumption

    @Column('double')
    total : number

    @Column({ default: false })
    paid : boolean
}
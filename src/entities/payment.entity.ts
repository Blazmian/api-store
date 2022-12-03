import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    id_consumption : number

    @Column('double')
    total : number

    @Column({ default: false })
    paid : boolean
}
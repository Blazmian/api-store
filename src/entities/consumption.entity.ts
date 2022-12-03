import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Consumption {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    date : Date

    @Column()
    consumption : string

    @Column()
    id_client : number
}
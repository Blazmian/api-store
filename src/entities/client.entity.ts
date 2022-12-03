import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    adress : string

    @Column()
    datebirth : Date
}
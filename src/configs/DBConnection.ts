import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from 'src/entities/client.entity'
import { Consumption } from "src/entities/consumption.entity";
import { Payment } from "src/entities/payment.entity";

export const Connection = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'electro-home',
    entities: [Client, Consumption, Payment],
    synchronize: true
})
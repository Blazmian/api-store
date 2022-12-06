import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from 'src/entities/client.entity'
import { Consumption } from "src/entities/consumption.entity";
import { Payment } from "src/entities/payment.entity";

export const Connection = TypeOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot()],
    useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Client, Consumption, Payment],
        synchronize: true
    }),
    inject: [ConfigService],
})
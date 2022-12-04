import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { Consumption } from 'src/entities/consumption.entity';
import { Payment } from 'src/entities/payment.entity';
import { ClientService } from '../Client/client.service';
import { PaymentService } from '../Payment/payment.service';
import { ConsumptionController } from './consumption.controller';
import { ConsumptionService } from './consumption.service';

@Module({
    imports: [TypeOrmModule.forFeature([Client, Consumption, Payment])],
    controllers: [ConsumptionController],
    providers: [ClientService, ConsumptionService, PaymentService],
    exports: [TypeOrmModule]
})
export class ConsumptionModule { }

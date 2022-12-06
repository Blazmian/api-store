import { PaymentService } from './api/Payment/payment.service';
import { ConsumptionModule } from './api/Consumption/consumption.module';
import { ConsumptionService } from './api/Consumption/consumption.service';
import { ClientModule } from './api/Client/client.module';
import { ClientService } from './api/Client/client.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from './configs/DBConnection';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: process.env.NODE_ENV === 'docker' ? '.env' : '.local.env' }),
    Connection, ConsumptionModule, ClientModule],
  controllers: [AppController],
  providers: [
    PaymentService,
    ConsumptionService,
    ClientService, AppService],
})
export class AppModule { }

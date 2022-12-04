import { ConsumptionModule } from './api/Consumption/consumption.module';
import { ConsumptionController } from './api/Consumption/consumption.controller';
import { ConsumptionService } from './api/Consumption/consumption.service';
import { ClientModule } from './api/Client/client.module';
import { ClientController } from './api/Client/client.controller';
import { ClientService } from './api/Client/client.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from './configs/DBConnection';

@Module({
  imports: [Connection, ConsumptionModule, ClientModule],
  controllers: [AppController],
  providers: [
    ConsumptionService,
    ClientService, AppService],
})
export class AppModule { }

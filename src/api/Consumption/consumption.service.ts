import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consumption } from 'src/entities/consumption.entity';
import { IConsumption } from 'src/models/Consumption';
import { Repository } from 'typeorm';
import { ClientService } from '../Client/client.service';

@Injectable()
export class ConsumptionService {
    
    constructor (
        @InjectRepository(Consumption)
        private consumptionEntity : Repository<Consumption>,
        private clientService: ClientService
    ){}

    async create (consumption : IConsumption) {
        const date = new Date()

        const id_client =  await this.clientService.getClientById(consumption.id_client)
        if (!id_client) {
            return 'Client not found'
        }

        await this.consumptionEntity.insert({
            date: date,
            consumption: consumption.consumption,
            client: id_client
        })
        return 'Consumption created'
    }
}

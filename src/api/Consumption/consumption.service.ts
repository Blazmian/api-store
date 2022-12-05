import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consumption } from 'src/entities/consumption.entity';
import { IConsumption } from 'src/models/Consumption';
import { getAge } from 'src/tools/Methods';
import { Repository } from 'typeorm';
import { ClientService } from '../Client/client.service';
import { PaymentService } from '../Payment/payment.service';

@Injectable()
export class ConsumptionService {
    
    constructor (
        @InjectRepository(Consumption)
        private consumptionEntity : Repository<Consumption>,
        private clientService: ClientService,
        private paymentService: PaymentService
    ){}

    async create (consumption : IConsumption) {
        const date = new Date()

        const id_client =  await this.clientService.getClientById(consumption.id_client)
        if (!id_client) {
            return 'Client not found'
        }

        const res = await this.consumptionEntity.save({
            date: date,
            consumption: consumption.consumption,
            client: id_client
        })

        const cons = consumption.consumption
        var total = 0
        if (cons <= 100) {
            total = 150
        } else if (cons > 100 && cons <= 300) {
            total = 170
        } else {
            total = 190
        }

        // Getting the birthdate of the client
        const clientBirthdate = (await this.clientService.getClientById(consumption.id_client)).birthdate
        if (getAge(clientBirthdate) > 50) {
            total *= .90
        }
        consumption.payment.total = total

        await this.paymentService.create_payment(res, consumption.payment)
        return 'Consumption created'
    }
}

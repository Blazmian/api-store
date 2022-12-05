import { Body, Controller, Get, Post } from '@nestjs/common';
import { IConsumption } from 'src/models/Consumption';
import { onlyNumbers } from 'src/tools/Methods';
import { ConsumptionService } from './consumption.service';

@Controller('consumption')
export class ConsumptionController {
    constructor(
        private consumptionService: ConsumptionService
    ) { }

    @Post()
    Create(@Body() params: IConsumption): Promise<String> | string {
        if (!onlyNumbers(params.consumption)) {
            return "Consumption only accepts numbers"
        }

        if (!(params.consumption > 0)) {
            return 'Consumption has to be more than 0'
        }

        try {
            return this.consumptionService.create(params)
        } catch (error) {
            return "Cannot create consumption: " + error;
        }
    }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { type } from 'os';
import { IConsumption } from 'src/models/Consumption';
import { onlyNumbers } from 'src/tools/Methods';
import { InsertResult } from 'typeorm';
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

        try {
            return this.consumptionService.create(params)
        } catch (error) {
            return "Cannot create consumption: " + error;
        }
    }
}

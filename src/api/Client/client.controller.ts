import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { IClient, Client } from 'src/models/Client';
import { onlyLetters, onlyNumbers, validBirthdate, validMail } from 'src/tools/Methods';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
    constructor( private clientService : ClientService ) {

    }

    @Post()
    Create(@Body() params : IClient ): string | boolean {
        if (!onlyLetters(params.name)) {
            console.log(params.name)
            return "Name only accepts letters"
        }

        if (!validMail(params.mail)) {
            return "Enter a valid email"
        }

        if (!onlyNumbers(params.phone)) {
            return "Phone only accepts numbers"
        }

        if (!validBirthdate(params.birthdate)) {
            return "Enter a valid date"
        }

        try {
            this.clientService.create(params)
            console.log("Client created!")
            return true;
        } catch (error) {
            return "Cannot create client: " + error;
        }
    }

    @Get('/all')
    getClients(): Promise<Client[]> | string {
        try {
            const res =  this.clientService.getAll()
            return res
        } catch (error) {
            return 'Cannot read clients: ' + error
        }        
    }

    @Get('/one/:mail')
    getClient(@Param('mail') params) : Promise<Client> | string {
        try {
            const res = this.clientService.getClientByMail(params)
            return res
        } catch (error) {
            return 'Cannot read clients: ' + error
        }
    }

    @Get('/stadistics')
    getClientMoreAndLessConsumption(): Promise<any> | string {
        try {
            const res = this.clientService.getClientsStadistics()
            return res
        } catch (error) {
            return 'Cannot read clients: ' + error
        }
    }

    @Get('/notpaid')
    getClientWhoHasNotPaid(): Promise<any> | string {
        try {
            const res = this.clientService.getClientNotPaid()
            return res
        } catch (error) {
            return 'Cannot read clients: ' + error
        }
    }

    @Get('/paid')
    getClientWhoPaid(): Promise<any> | string {
        try {
            const res = this.clientService.getClientPaid()
            return res
        } catch (error) {
            return 'Cannot read clients: ' + error
        }
    }
}
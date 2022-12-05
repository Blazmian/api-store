import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client as ClientEntity } from 'src/entities/client.entity';
import { Consumption } from 'src/entities/consumption.entity';
import { IClient, Client } from 'src/models/Client';
import { MoreThan, Not, Repository } from 'typeorm';

@Injectable()
export class ClientService {

    constructor (
        @InjectRepository(ClientEntity)
        private clientEntity : Repository<ClientEntity>
    ) {}

    async create( client : IClient ) {
        return await this.clientEntity.insert(client)
    }

    async getAll(): Promise<Client[]> {
        return await this.clientEntity.find({relations: ['consumption', 'consumption.payment']})
    }

    async getClientsStadistics(): Promise<ClientEntity[] | string> {
        const arr: ClientEntity[] = []
        
        // Obtain the client with more consumption
        const max = await this.clientEntity.findOne(
            {
                relations: { consumption: true }, 
                order: { consumption: { consumption : "DESC"} },
                where: { consumption: { consumption: MoreThan(0)}}
            }
        )
        if(!max) {
            return 'No data in consumption'
        }
        arr.push(max)

        // Obtain the client with less consumption
        const min = await this.clientEntity.findOne(
            {
                relations: { consumption: true }, 
                order: { consumption: { consumption : "ASC"} },
                where: { consumption: { consumption: MoreThan(0)}}
            }
        )
        arr.push(min)

        return arr
    }

    async getClientNotPaid () {
        return await this.clientEntity.find({
            relations: ['consumption', 'consumption.payment'],
            where: { consumption: { payment: { paid: false } }}
        })
    }

    async getClientPaid () {
        return await this.clientEntity.find({
            relations: ['consumption', 'consumption.payment'],
            where: { consumption: { payment: { paid: true } }}
        })
    }

    async getClientById (id_client: number) : Promise<ClientEntity> {
        return await this.clientEntity.findOne({
            where: {id: id_client}
        })
    }

    async getClientByMail (mail: string) : Promise<ClientEntity> {
        return await this.clientEntity.findOne({
            relations: ['consumption', 'consumption.payment'],
            where: { mail: mail}
        }) 
    }
}

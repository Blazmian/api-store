import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client as ClientEntity } from 'src/entities/client.entity';
import { IClient, Client } from 'src/models/Client';
import { Repository } from 'typeorm';

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
        return await this.clientEntity.find({relations: { consumption: true }})
    }

    async getClientById (id_client: number) : Promise<ClientEntity> {
        return await this.clientEntity.findOne({
            where: {id: id_client}
        })
    }
}

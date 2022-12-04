import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
    imports: [TypeOrmModule.forFeature([Client])],
    controllers: [ClientController],
    providers: [ClientService],
    exports: [TypeOrmModule]
})
export class ClientModule {}
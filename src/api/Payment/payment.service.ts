import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consumption } from 'src/entities/consumption.entity';
import { Payment } from 'src/entities/payment.entity';
import { IPayment } from 'src/models/Payment';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
    constructor(@InjectRepository(Payment) private paymentEntity : Repository<Payment>){}

    async create_payment(id_consumption : Consumption, payment : IPayment) {
        this.paymentEntity.insert({
            consumption : id_consumption,
            total: payment.total,
            paid: payment.paid
        })
    }
}

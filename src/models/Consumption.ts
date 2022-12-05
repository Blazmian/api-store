import { IPayment } from "./Payment"

export interface IConsumption {
    consumption : number
    id_client : number
    payment : IPayment
}
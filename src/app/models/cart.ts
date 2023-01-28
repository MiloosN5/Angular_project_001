import { Product } from "./product";

export class Cart{
    constructor(
        public id: number,
        public product: Product,
        public quantity: number
    ){}
}
export class Product {
    constructor(
        public id: number,
        public imgSrc: string,
        public name: string,
        public price: number,
        public category: string,
        public description: string
    ){}
}
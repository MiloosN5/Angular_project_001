import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Cart } from "../models/cart";

@Injectable()
export class InMemoryLibrary implements InMemoryDbService{
    createDb() {
        const buyedProducts: Cart[] = [];
        return {
            buyedProducts
        };
    }
    
}
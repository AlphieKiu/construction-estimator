import { ItemDetails } from './item-details';

export class Item {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;


    //Do we need this on the frontend?
    //itemDetails: ItemDetails[];

    constructor(id: number, name: string, description: string, price: number, category: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
    
}
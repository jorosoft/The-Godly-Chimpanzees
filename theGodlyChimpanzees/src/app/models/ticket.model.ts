export class Ticket {
    name: string;
    date: string;
    price: number;
    type: string;

    constructor(name, date, price, type) {
        this.name = name;
        this.date = date;
        this.price = price;
        this.type = type;
    }
}


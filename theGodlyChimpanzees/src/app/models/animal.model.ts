export class Animal {
    name: string;
    status: string;
    about: string;
    messages: Message[];

    rows: number;

    cols: number;

    zone: string;

    type: string;
}

export class Message {
    who: string;
    content: string;
}

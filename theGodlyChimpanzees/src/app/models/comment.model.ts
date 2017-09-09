export class Comment {

    name: string;
    userName: string;
    date: Date;
    content: string;

    constructor(aName, uName, date, content) {
        this.name = aName;
        this.userName = uName;
        this.date = date;
        this.content = content;
    }

    // TODO add validations
}

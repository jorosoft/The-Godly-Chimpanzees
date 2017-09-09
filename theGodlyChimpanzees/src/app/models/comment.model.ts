export class Comment {

    animalName: string;

    userName: string;

    date: Date;

    subject: string;

    content: string;

    constructor(aName, uName, date, content) {
        this.animalName = aName;
        this.userName = uName;
        this.date = date;
        this.content = content;
    }

    // TODO add validations
}

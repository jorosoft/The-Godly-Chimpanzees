export class User {
    username: string;
    email: string;
    password: string;
    info: any;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.info = {type: 'v', tickets: []};

    }
}


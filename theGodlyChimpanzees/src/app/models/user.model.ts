export class User {
    username: string;
    email: string;
    password: string;
    info: any;
    avatar: string;

    constructor(username, email, password, avatar) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.info = { type: 'v', tickets: [] };
        this.avatar = avatar;

    }
}


class MessageBoard {
    constructor() {
        this.users = new Array();
        this.messages = new Array();
    }

    addUser(username) {
        this.users.push(username);
    }

    listUsers() {
        return this.users;
    }

    findUser(name) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username == name) {
                return this.users[i];
            }
        }
        return null;
    }

    addMessage(message) {
        this.messages.push(message);
    }

    listMessages() {
        return this.messages;
    }
}
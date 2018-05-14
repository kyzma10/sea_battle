import './style.css';

class User {

    id: number;
    name: string;
    constructor(userId: number, userName: string) {

        this.id = userId;
        this.name = userName;
    }
    getInfo(): string {
        return "id:" + this.id + " name:" + this.name;
    }
}

let tom: User = new User(1, "Tom");
console.log(tom.getInfo());
tom.id = 4;

let alice: User = new User(2, "Alice");
console.log(alice.getInfo());

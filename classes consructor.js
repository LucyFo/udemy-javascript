class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
        this.hello = function () {
            console.log('Hello! ' + this.name);
        };
    }
    exit() {
        console.log('Пользователь + ${this.name} + ушел');
    }
}


let ivan = new User('Ivan', 25);
alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.exit();

// class User {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//   }
//   exit() {
//     console.log("Пользователь ${this.name} + ушел");
//   }
// }
// let ivan = new User("Ivan", 25);
// alex = new User("Alex", 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

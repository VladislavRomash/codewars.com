class Person {
    constructor(name) {
        this.name = name
    }

    greet(value) {
        return `Hello ${value}, my name is ${this.name}`;
    }
}
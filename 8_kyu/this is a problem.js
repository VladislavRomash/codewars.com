function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {name: this.firstName + ' ' + this.lastName, firstName: first, lastName: last};
}

let n = new NameMe('John', 'Doe');
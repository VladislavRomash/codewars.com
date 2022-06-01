class Ghost {
    constructor() {
        this.colours = ['white', 'yellow', 'purple', 'red']
    }

    get color() {
        const position = Math.trunc(Math.random() * this.colours.length)
        return this.colours[position]
    }
}
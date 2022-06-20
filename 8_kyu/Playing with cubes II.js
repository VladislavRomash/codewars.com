// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args

class Cube {
    constructor(n = 0) {
        this.setSide(n)
    }

    getSide() {
        return this.side
    }

    setSide(n) {
        typeof n !== 'number'
            ? new Error('NaN')
            : this.side = Math.abs(n)
    }
}

const c = new Cube(10)
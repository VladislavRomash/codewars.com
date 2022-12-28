class Block {

    constructor(data) {
        this.a = data[0]
        this.b = data[1]
        this.h = data[2]
    }

    getWidth() {
        return this.a
    }

    getLength() {
        return this.b
    }

    getHeight() {
        return this.h
    }

    getVolume() {
        return this.a * this.b * this.h
    }

    getSurfaceArea() {

        return 2 * (this.a * this.b + this.a * this.h + this.b * this.h)
    }

}

const test = new Block([2, 4, 6])

test.getWidth()
test.getLength()
test.getHeight()
test.getVolume()
test.getSurfaceArea()
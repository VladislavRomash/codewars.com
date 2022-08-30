function howMuchWater(water, load, clothes) {
    const math = +((water * Math.pow(1.1, clothes - load)).toFixed(2))
    return clothes > load * 2 ? 'Too much clothes' : clothes < load ? 'Not enough clothes' : math
}

howMuchWater(10, 10, 21)
howMuchWater(10, 10, 2)
howMuchWater(10, 11, 20)
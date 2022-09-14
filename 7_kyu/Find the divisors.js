function divisors(integer) {
    let arr = []
    for (let i = 0; i < integer; i++) {
        if (integer % i === 0) {
            arr.push(i)
        }
    }
    return arr.length === 1 ? `${integer} is prime` : arr.splice(1)
}


divisors(15)
divisors(12)
divisors(13)
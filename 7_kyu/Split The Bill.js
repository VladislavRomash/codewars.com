function splitTheBill(x) {
    let average = 0;
    let count = 0;

    for (item in x) {
        average += x[item];
        count++;
    }
    average = average / count;

    for (item in x) {
        x[item] = Math.round((x[item] - average) * 100) / 100;
    }

    return x;
}

splitTheBill({A: 20, B: 15, C: 10})
splitTheBill({A: 40, B: 25, C: 10})
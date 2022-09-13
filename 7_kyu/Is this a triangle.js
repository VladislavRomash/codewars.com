function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a
}

isTriangle(1, 2, 2)
isTriangle(7, 2, 2)
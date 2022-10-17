function isPowerOfTwo(n) {
    return Math.log2(n) % 1 === 0
}

isPowerOfTwo(1024)
isPowerOfTwo(4096)
isPowerOfTwo(512)
isPowerOfTwo(333)
isPowerOfTwo(234)
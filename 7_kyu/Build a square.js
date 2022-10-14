function generateShape(integer) {
    return `${'+'.repeat(integer)}\n`.repeat(integer).trim()
}


generateShape(8)
generateShape(3)
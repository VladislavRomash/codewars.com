function seatsInTheater(nCols, nRows, col, row) {
    return (nCols + 1 - col) * (nRows - row)
}

seatsInTheater(16, 11, 5, 3)
seatsInTheater(1, 1, 1, 1)
seatsInTheater(13, 6, 8, 3)
seatsInTheater(1000, 1000, 1000, 1000)
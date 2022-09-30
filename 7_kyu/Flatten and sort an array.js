"use strict";

function flattenAndSort(array) {
    return array.flat().sort((a, b) => a - b)
}

flattenAndSort([])
flattenAndSort([[], []])
flattenAndSort([[], [1]])
flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])
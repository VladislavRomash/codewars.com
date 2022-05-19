const cubeChecker = function (volume, side) {
    return side > 0 && volume === side * side * side
};

cubeChecker(125, -5)
cubeChecker(8, 2)
function quadrant(x, y) {
    if (x > 0 && y > 0) return 1
    if (x < 0 && y > 0) return 2
    if (x < 0 && y < 0) return 3
    if (x > 0 && y < 0) return 4
}


quadrant(1, 2)
quadrant(3, 5)
quadrant(-10, 100)
quadrant(1, 2)
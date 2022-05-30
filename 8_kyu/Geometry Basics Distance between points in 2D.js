const distanceBetweenPoints = (a, b) => {
    return Math.sqrt(Math.pow(Math.abs(a.x - b.x), 2) + Math.pow(Math.abs(a.y - b.y), 2));
}


distanceBetweenPoints(new Point(3, 3), new Point(3, 3))
distanceBetweenPoints(new Point(1, 6), new Point(4, 2))
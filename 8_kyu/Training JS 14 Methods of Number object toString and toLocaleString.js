function colorOf(r, g, b) {
    let red = r.toString(16);
    let green = g.toString(16);
    let blue = b.toString(16);

    red = red.length < 2 ? '0' + red : red;
    green = green.length < 2 ? '0' + green : green;
    blue = blue.length < 2 ? '0' + blue : blue;

    return `#${red}${green}${blue}`
}


colorOf(255, 0, 0)
colorOf(0, 111, 0)
colorOf(1, 2, 3)
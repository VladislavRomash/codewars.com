function triangle(row) {
    let reduced = row.length > 1 ? '' : row
    for (let i = 0; i < row.length - 1; i++) {
        reduced += row[i] === row[i + 1] ? row[i] : 'RGB'.replace(row[i], '').replace(row[i + 1], '')
    }
    return reduced.length > 1 ? triangle(reduced) : reduced
}


triangle('GB')
triangle('RRR')
triangle('RGBG')
function magNumber(info) {
    const copyInfo = [...info]
    const gun = {'PT92': 17, 'M4A1': 30, 'M16A2': 30, 'PSG1': 5}
    const sumBullets = copyInfo[1] * 3
    return Math.ceil(sumBullets / gun[copyInfo[0]])
}

magNumber(["PT92", 6])
magNumber(["M4A1", 8])
magNumber(["PT92", 19])
magNumber(["PSG1", 31])
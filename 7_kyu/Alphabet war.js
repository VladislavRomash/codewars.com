function alphabetWar(fight) {
    const lettersLeft = {w: 4, p: 3, b: 2, s: 1}
    const lettersRight = {m: 4, q: 3, d: 2, z: 1}
    const arr = fight.split('');
    const left = arr.filter(v => v.match(/[wpbs]/g)).map(v => lettersLeft[v]).reduce((a, b) => a + b, 0);
    const right = arr.filter(v => v.match(/[mqdz]/g)).map(v => lettersRight[v]).reduce((a, b) => a + b, 0);
    return left === right ? 'Let\'s fight again!' : left > right ? 'Left side wins!' : 'Right side wins!'
}

alphabetWar("z") //right
alphabetWar("zdqmwpbs") // again
alphabetWar("zzzzs") // right
alphabetWar("wwwwww") // left
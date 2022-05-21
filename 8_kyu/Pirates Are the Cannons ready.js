const a = {'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye'};
const b = {'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye'};

const cannonsReady = (gunners) => {
    const str = JSON.stringify(gunners)
    return String(str.match(/nay/gi)) === 'nay' ? 'Shiver me timbers!' : 'Fire!'
}

cannonsReady(a)
cannonsReady(b)


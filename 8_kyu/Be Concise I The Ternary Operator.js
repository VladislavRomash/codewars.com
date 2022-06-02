// TODO: Refactor and shorten the function

function describeAge(a) {
    let r=`You're a(n) `
    return `You're a(n) ${a<13?'kid':a<18?'teenager':a<65?'adult':'elderly'}`
}

describeAge(9)
describeAge(13)
describeAge(18)
describeAge(66)
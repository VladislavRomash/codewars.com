function XO(str) {
    return str.toLowerCase().split('').filter(f => f === 'x').length === str.toLowerCase().split('').filter(f => f === 'o').length
}


XO('xo')
XO("xxOo")
XO("xxxm")
XO("zpzpzpp")
XO("Oo")
XO("ooom")
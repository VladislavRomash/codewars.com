function getIssuer(number) {
    const str = String(number)
    if (str.length === 15 && (str.startsWith('34') || str.startsWith('37'))) return 'AMEX'
    if (str.length === 16 && str.startsWith('6011')) return 'Discover'
    if (str.length === 16 && (str.startsWith('51') || str.startsWith('52') || str.startsWith('53') || str.startsWith('54') || str.startsWith('55'))) return 'Mastercard'
    if ((str.length === 16 || str.length === 13) && str.startsWith('4')) return 'VISA'
    return 'Unknown'
}

getIssuer(4111111111111111)
getIssuer(378282246310005)
getIssuer(9111111111111111)
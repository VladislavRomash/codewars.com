function validateHello(greetings) {
    return /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings)
}


validateHello('ahoj')
validateHello('meh')
validateHello('HASTa HomBRe lA. QUe: tsChuss! VIsTa; la VISTA: Vista VIsta wIE VIStA, dOiNG HOw bIen CiaO?')
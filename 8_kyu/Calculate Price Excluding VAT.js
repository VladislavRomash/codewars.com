//return price without vat
function excludingVatPrice(price) {
    return price !== null ? +(price / 1.15).toFixed(2) : -1
}

excludingVatPrice(230)
excludingVatPrice(123)
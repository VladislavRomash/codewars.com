const filterString = function (value) {
    return Number(value.replace(/[^0-9]/gi, ''))
}


filterString("123")
filterString("a1b2c3")
filterString("aa1bb2cc3dd")
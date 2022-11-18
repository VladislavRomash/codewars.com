function alternateCase(s) {
    return s.split('').map(m => m === m.toUpperCase() ? m.toLowerCase() : m.toUpperCase()).join('')
}

alternateCase("abc")
alternateCase("ABC")
alternateCase("Hello World")
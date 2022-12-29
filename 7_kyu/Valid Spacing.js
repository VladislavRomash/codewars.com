function validSpacing(s) {
    return s === '' || s === s.split(' ').filter(f => f !== '').join(' ')
}


validSpacing('Hello world')
validSpacing('Helloworld')
validSpacing('')
validSpacing('Hello world ')
validSpacing('Hello  world ')
validSpacing('OY D  Qp')
validSpacing('WZ  U YpP')



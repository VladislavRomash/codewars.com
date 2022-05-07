function validateUsr(username) {
    return username.length <= 16 && username.length >= 4 && username.match(/[a-z]|_|\d/g).length === username.length
}


validateUsr('asd43_34')
validateUsr('asddsa')
validateUsr('a')
validateUsr('Hasd_12assssssasasasasasaasasasasas')
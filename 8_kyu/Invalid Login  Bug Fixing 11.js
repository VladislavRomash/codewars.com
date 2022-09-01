function validate(username, password) {
    var database = new Database();
    if (password.includes('\\') || password.includes('||')) {
        return 'Wrong username or password!'
    }
    return database.login(username, password);
}


validate('Timmy', 'password')
validate('Timmy', 'h4x0r')
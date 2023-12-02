function searchNames(logins) {
    return logins.filter(f => f[0].endsWith('_'))
}

searchNames([["foo", "foo@foo.com"], ["bar_", "bar@bar.com"]])
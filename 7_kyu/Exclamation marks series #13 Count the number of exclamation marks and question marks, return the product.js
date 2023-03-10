function product(string) {
    return (string.match(/[?]/g) || []).length * (string.match(/[!]/g) || []).length
}

product("")
product("!")
product("!ab? ?")
product("!!")
product("!??")
product("!!!???")
product("!????!!!?")
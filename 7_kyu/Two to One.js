function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('')
}


longest("aretheyhere", "yestheyarehere")
longest("loopingisfunbutdangerous", "lessdangerousthancoding")
longest("inmanylanguages", "theresapairoffunctions")
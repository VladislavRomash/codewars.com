const isAnagram = function (test, original) {
    const sortTest = test.toLowerCase().split('').sort().join('')
    const sortOriginal = original.toLowerCase().split('').sort().join('')
    return sortTest === sortOriginal
}

isAnagram("foefet", "toffee")
isAnagram("Buckethead", "DeathCubeK")
isAnagram("Twoo", "WooT")
isAnagram("dumble", "bumble")
isAnagram("ound", "round")
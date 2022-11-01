function vowelOne(s) {
    const vowels = s.replace(/[^aeiou]/gi, 0)
    return vowels.replace(/[aeiou]/gi, 1)
}


vowelOne("vowelOne")
vowelOne("123, arou")
vowelOne("AZUIiJqE0fUOuUo\"pYcEzJ/~AW,ElI")


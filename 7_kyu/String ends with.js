function solution(str, ending) {
    return str.endsWith(ending)
}

solution('abcde', 'cde')
solution('abcde', 'abc')
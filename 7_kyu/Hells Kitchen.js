function gordon(a) {
    return a.split(' ').map(m => `${m.toUpperCase().replace(/a/gi, '@').replace(/[eiou]/gi, '*')}!!!!`).join(' ')
}


gordon('What feck damn cake')
gordon('are you stu pid')
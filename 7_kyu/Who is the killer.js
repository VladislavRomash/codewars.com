function killer(suspectInfo, dead) {
    return Object.keys(suspectInfo).find(f => dead.every(e => suspectInfo[f].includes(e)))
}

killer({
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
}, ['Lucas', 'Bill'])
killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben'])
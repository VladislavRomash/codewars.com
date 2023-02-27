function nicknameGenerator(name) {
    return name.length < 4 ? 'Error: Name too short'
        : name[2].includes('a')
        || name[2].includes('e')
        || name[2].includes('i')
        || name[2].includes('o')
        || name[2].includes('u')
            ? name.slice(0, 4)
            : name.slice(0, 3)
}

function nicknameGenerator(name) {
    return name.length < 4 ? 'Error: Name too short'
        : name.slice(0, 3 + 'aeoui'.includes(name[2]))
}


nicknameGenerator("Jimmy")
nicknameGenerator("Samantha")
nicknameGenerator("Sam")
nicknameGenerator("Vladislav")
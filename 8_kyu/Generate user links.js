function generateLink(user) {
    user = encodeURIComponent(user)
    return `http://www.codewars.com/users/${user}`
}

generateLink('matt c')
generateLink('g964')
generateLink('GiacomoSorbi')
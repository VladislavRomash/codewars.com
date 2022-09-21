function removeUrlAnchor(url) {
    const index = url.indexOf('#')
    return index !== -1 ? url.slice(0, index) : url
}


/*function removeUrlAnchor(url) {
    return url.split('#')[0];
}*/

removeUrlAnchor('www.codewars.com#about')
removeUrlAnchor('www.codewars.com/katas/?page=1#about')
removeUrlAnchor('www.codewars.com/katas/')
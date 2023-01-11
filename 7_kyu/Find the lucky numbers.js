const filterLucky = x => {
    return x.filter(m => m.toString().includes('7'));
}


filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])
filterLucky([71, 9907, 69])
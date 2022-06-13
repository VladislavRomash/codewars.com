let find = (ar, el) => ar.indexOf(el) === -1 ? 'Not found' : ar.indexOf(el)


find([2, 3, 5, 7, 11], 5)
find([2, 3, 5, 7, 11], 8)
find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "Hello World")
find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], 3.14)
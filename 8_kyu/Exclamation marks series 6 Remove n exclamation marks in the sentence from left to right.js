function remove(s, n) {
    let input = s;
    while (n) {
        input = input.replace(/!/, "");
        n -= 1;
    }
    return input;
}

remove("!!!Hi !!hi!!! !hi", 1)
remove("!!!Hi !!hi!!! !hi", 100)
remove("Hi!", 1)
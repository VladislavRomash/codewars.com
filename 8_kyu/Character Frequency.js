function charFreq(message) {
    let freq = {};
    for (let i = 0; i < message.length; i++) {
        if (freq[message[i]]) {
            freq[message[i]] += 1;
        } else {
            freq[message[i]] = 1;
        }
    }
    return freq;
}

charFreq("I like cats")
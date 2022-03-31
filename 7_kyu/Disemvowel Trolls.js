function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u"]
  
    return str.split("")
      .filter((it) => !vowels.includes(it.toString().toLowerCase()))
      .join("")
  }
function howMuchILoveYou(nbPetals) {
    let phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all'
    ];
      for (let i = 0; i <= nbPetals-1; i += 1) {
      
      if (i === nbPetals-1) {
        return phrases[i%6];
        }
      }
    }
    
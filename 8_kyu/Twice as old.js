function twiceAsOld(dadYearsOld, sonYearsOld) {
    var age = dadYearsOld-sonYearsOld*2;
    if (age<0) {
      return age*(-1);
    } else {
      return age;
    }
  }
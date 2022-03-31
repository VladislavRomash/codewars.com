function finalGrade (exam, projects) {
    let result = 0;
    if (exam>90 || projects>10) {
      return result = 100;
    } else if (exam>75 && projects>=5) {
      return result = 90;
    } else if (exam>50 && projects>=2) {
      return result = 75;
    } else {return result;}
    
  };
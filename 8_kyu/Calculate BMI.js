function bmi(weight, height) {
    const score = weight/height**2;
    if (score <= 18.5) {return 'Underweight';}
    else if (score <= 25) {return 'Normal';}
    else if (score <= 30) {return 'Overweight';}
    else if (score > 30) {return 'Obese';}
  }
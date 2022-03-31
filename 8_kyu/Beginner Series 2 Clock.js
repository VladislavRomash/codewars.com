function past(h, m, s){
    let hour = 3600000;
    let minutes = 60000;
    let seconds = 1000;
    return h*hour+m*minutes+s*seconds;
  }
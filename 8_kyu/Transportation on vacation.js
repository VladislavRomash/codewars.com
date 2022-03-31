function rentalCarCost(d) {
    let dayCost = 40; 
    if (d>=7) {
    dayCost = (40*d) - 50; 
    } else if (d>=3) {
    dayCost = (40*d) - 20; 
    } else {
    dayCost = (40*d);
    }
    return dayCost;
  }
  
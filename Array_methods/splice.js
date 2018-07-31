function splice(array, numberStart, numberStop, valuePush) {
  let newArray = [],
  stopSumNumber = numberStart + numberStop;
  for(i=0; i < array.length ; i++) {
    if(stopSumNumber > numberStart) {
      if(valuePush) {
        if(i === numberStart) {
          newArray.push(valuePush);
        }
      }
      if(i >= numberStart && i < stopSumNumber) continue;
      newArray.push(array[i]);
    } else {
      newArray.push(array[i]);
      if(valuePush) {
        if(i === numberStart) {
          newArray.push(valuePush);
        }
      }
    }

  }
  console.log(newArray);
};

module.exports = splice;
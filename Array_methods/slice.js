function slice(array, numberStart, numberStop) {
  let newArray = [];
  for(i=numberStart; i < numberStart + numberStop ; i++) {
    newArray.push(array[i]);
  }
  console.log(newArray);
};

module.exports = slice;
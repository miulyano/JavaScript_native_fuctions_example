function reduce(array, firstNumber) {
  let sum = firstNumber;
  if(!sum) {
    sum = array[0];
    for(i=1; i < array.length; i++) {
      sum = sum * array[i]
    }
  } else {
    for(i=0; i < array.length; i++) {
      sum = sum * array[i]
    }
  }
  console.log(sum)
}

module.exports = reduce;
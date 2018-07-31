function forEach(array, number) {
  for(i=0; i<array.length; i++) {
    array[i] = array[i] + number;
    console.log(array[i]);
  }
};

module.exports = forEach;
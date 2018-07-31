function filter(array, number) {
  let newArray = [];
  for(i=0; i<array.length; i++) {
    if(array[i] < number) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
};

module.exports = filter;
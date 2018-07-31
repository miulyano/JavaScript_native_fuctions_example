function map(array, number) {
  let newArray = [];
  for(let item in array) {
    let sum = function () {
      return array[item] + number;
    };
    newArray.push(sum());
  }
  console.log(newArray);
};

module.exports = map;
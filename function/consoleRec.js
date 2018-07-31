function consoleRec (array, number) {
    console.log(array[number]);
    number+=1;
    if(number < array.length) {
        consoleRec(array, number);
    }
}


module.exports = consoleRec;
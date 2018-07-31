let num = true;

function isAllTrue (source, filterFn, i) {
    if (source.length === 0) {
        throw new Error('Пустой массив')
    }

    try {
        filterFn (source, i);
        i+=1;
        if(!num) {
            console.error('stop');
            return false;
        } else if(num) {
                if(i < source.length) {
                    isAllTrue (source, filterFn, i);
                }
            }
    } catch(e) {
        console.error(e.message);
    }


 };

 function filterFn (source, i) {

     if(typeof source[i] === 'number') {
         console.log(source[i]);
         console.warn(typeof source[i] === 'number');
         return true;
     } else {
         num = false;
         return false
     }
 };

 let arr = [1, 2];
 console.log(isAllTrue(arr, filterFn, 0));
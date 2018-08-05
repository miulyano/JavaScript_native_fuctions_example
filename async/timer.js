function timer (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

timer(3000).then(() => console.log('done'));
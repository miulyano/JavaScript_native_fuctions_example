let button = document.getElementById('sendAJAX');
let block = document.getElementById('responseAJAX');

function sendAJAX (url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            resolve(xhr.response);
        } );
        xhr.send();
    })
}

button.addEventListener('click', () => {
    sendAJAX('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json').then(response => {
        let responseSort = response.sort(function(a, b){
            let aname = a.name.toLowerCase(),
                bname = b.name.toLowerCase();
            if(aname < bname) return -1;
            if(aname > bname) return 1;
        });
        for ({name} of responseSort) {
            let div = document.createElement('div');
            div.innerText = name;
            block.appendChild(div);
        }
    });
});
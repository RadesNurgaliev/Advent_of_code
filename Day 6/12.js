let timers = document.getElementsByTagName('pre')[0].innerText.trim().split(',').map(t => parseInt(t));

let firstReproduct = 8;
let reproduct = 6; 
let hashTable = {};
for (let i = 0; i <= firstReproduct; i++) {
    hashTable[i] = timers.filter(t => t === i).length;
}

let days = 256;

for (let i = 1; i <= days; i++) {
    let boofer = hashTable[0];
    for (let j = 0; j < firstReproduct ; j++) {
        hashTable[j] = hashTable[j + 1];
    }
    hashTable[firstReproduct] = boofer;
    hashTable[reproduct] += boofer;
}

let count = 0;
for (let key in hashTable) {
    count += hashTable[key];
}

console.log('Результат: ' + count);
let entries = document.getElementsByTagName('pre')[0].innerText.trim().split('\n').map(e => e.split('|').map(e => e.trim().split(' ')));

let simpleCounts = [2, 3, 4, 7];

let simleDigitCount = 0;

entries.forEach(entry => {
    let part2 = entry[1];
    part2.forEach(eDigit => {
        if (simpleCounts.includes(eDigit.length)) {
            simleDigitCount++;
        }
    });
});

console.log('Результат: ' + simleDigitCount);
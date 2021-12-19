let positions = document.getElementsByTagName('pre')[0].innerText.trim().split(',').map(t => parseInt(t)).sort((a, b) => a > b ? 1 : -1);

let sum = 0;
positions.forEach(position => {
    sum += position;
});

let average = Math.floor(sum / positions.length);

let fuelTotal = 0;
positions.forEach(position => {
    let diff = Math.abs(position - average);
    for (let i = 1; i <= diff; i++) {
        fuelTotal += i;
    }
});

console.log('Результат: ' + fuelTotal);
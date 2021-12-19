let positions = document.getElementsByTagName('pre')[0].innerText.trim().split(',').map(t => parseInt(t)).sort((a, b) => a > b ? 1 : -1);

let median = positions[Math.floor(positions.length / 2)];

let fuelTotal = 0;
positions.forEach(position => {
    fuelTotal += Math.abs(position - median);
});

console.log('Результат: ' + fuelTotal);
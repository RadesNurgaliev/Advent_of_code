let timers = document.getElementsByTagName('pre')[0].innerText.trim().split(',').map(t => parseInt(t));

let days = 80;

for (let i = 1; i <= days; i++) {
    let timersCount = timers.length;
    for (let j = 0; j < timersCount; j++) {
        if (timers[j] === 0) {
            timers[j] = 6;
            timers.push(8);
        } else {
            timers[j]--;
        }
    }
}

console.log('Результат: ' + timers.length);

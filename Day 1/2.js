const measurements = document.getElementsByTagName('pre')[0].innerText.split('\n').filter(e => e !== '').map(e => Number(e));

let counter = 0;
for (let i = 0; i < measurements.length - 3; i++) {
    if (measurements[i] < measurements[i + 3]) {
        counter++
    }
}
console.log("Результат: " + counter);
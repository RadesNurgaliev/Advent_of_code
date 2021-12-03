const measurements = document.getElementsByTagName('pre')[0].innerText.split('\n').filter(e => e !== '').map(e => Number(e));

let counter = 0;
for (let i = 1; i < measurements.length; i++) {
    if (measurements[i] > measurements[i - 1]) {
        counter++;
    }
}
console.log("Результат: " + counter);
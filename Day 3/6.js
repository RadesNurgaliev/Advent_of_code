const entries = document.getElementsByTagName('pre')[0].innerText.split('\n').filter(e => e !== '').map(e => e.split('').map(e => Number(e)));

function getRates(entries, priorityNum) {
    let rates = entries;
    let nextBit = 0;
    while (rates.length > 1) {
        let ones = 0;
        let zeros = 0;
        rates.forEach(item => {
            if (item[nextBit] === 0) {
                zeros++;
            } else {
                ones++;
            }
        });
        rates = rates.filter(e => e[nextBit] === (ones < zeros ? priorityNum : priorityNum ^ 1));
        nextBit++;
    }
    return rates;
}

function prepareRates(rates) {
    return parseInt(rates[0].join(''), 2);
}

let oxyRates = getRates(entries, 1);
let co2Rates = getRates(entries, 0);

console.log("Результат: " + (prepareRates(oxyRates) * prepareRates(co2Rates )));
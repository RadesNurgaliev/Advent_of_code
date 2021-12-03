const entries = document.getElementsByTagName('pre')[0].innerText.split('\n').filter(e => e !== '').map(e => e.split('').map(e => Number(e)));

let interim = [];
for (let i = 0; i < entries.length; i++) {
    for (let j = 0; j < entries[i].length; j++)  {
        interim[j] = (entries[i][j] === 0 ? 1 : -1) + (interim[j] === undefined ? 0 : interim[j]);
    }
}

const gamma = parseInt(interim.map(e => e >= 0 ? 1 : 0).join(''), 2);
const epsilon = parseInt(interim.map(e => e >= 0 ? 0 : 1).join(''), 2);

console.log("Результат: " + (gamma * epsilon));
let lines = document.getElementsByTagName('pre')[0].innerText.trim().split('\n').map(l => l.split('->').map(c => c.replaceAll(' ', '').split(',')));

let size = 1000;
let crossImage = [];
for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
        row.push(0);
    }
    crossImage.push(row);
}

lines.forEach(line => {
    let x1 = parseInt(line[0][0], 10);
    let y1 = parseInt(line[0][1], 10);
    let x2 = parseInt(line[1][0], 10);
    let y2 = parseInt(line[1][1], 10);

    if (x1 === x2) {        
        [y1, y2] = y1 < y2 ? [y1, y2] : [y2, y1];
        for (let i = y1; i <= y2; i++) {
            crossImage[x1][i]++;
        }
    } else if (y1 === y2) {
        [x1, x2] = x1 < x2 ? [x1, x2] : [x2, x1];
        for (let i = x1; i <= x2; i++) {
            crossImage[i][y1]++;
        }
    }
});

let crossings = 0;
crossImage.forEach(line => {
    line.forEach(point => {
        if (point > 1) {
            crossings++;
        }
    });
});

console.log('Результат: ' + crossings);
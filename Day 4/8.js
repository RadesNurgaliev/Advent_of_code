let entries = document.getElementsByTagName('pre')[0].innerText.split('\n').filter(e => e !== '');
const sequence = entries.shift().split(',').map(e => Number(e));

class SpecialHashTable 
{
	map = {};
	set(key, value) {
		if (this.map[key] === undefined) {
			this.map[key] = [];
		}
		this.map[key].push(value);
		return this.map[key];
	}
	get(key) {
		return this.map[key];
	}
}

let numbers = new SpecialHashTable();
let rows = new SpecialHashTable();
let cols = new SpecialHashTable();
let boards = new SpecialHashTable();
let rowIndex = 0;
let boardIndex = 0;
while (entries.length > 0) {
    let line = entries.shift().trim().replaceAll('  ', ' ').split(' ').map(e => Number(e));
    for (let colIndex = 0; colIndex < line.length; colIndex++) {
        let value = line[colIndex];
		
		boards.set(boardIndex, value);

		numbers.set(value, {
			combo: cols.set(`${boardIndex}_${colIndex}`, value),
			board: boardIndex
		});
		
		numbers.set(value, {
			combo: rows.set(`${boardIndex}_${rowIndex}`, value),
			board: boardIndex
		});

    }
    rowIndex++;
    if (rowIndex % 5 === 0) {
        rowIndex = 0;
        boardIndex++;
    }
}


let lastNumber = null;
let wonBoards = [];
let lastWonBoardNonPlayNumbersSum = 0;
while (sequence.length > 0) {
    let number = sequence.shift();
	let numSet = numbers.get(number);
    if (numSet !== undefined) {
        for (let i = 0; i < numSet.length; i++) {
            let board = boards.get(numSet[i]['board']);
            if (wonBoards.includes(board)) {
                continue;
            }
            let combo = numSet[i]['combo'];
            combo.splice(combo.indexOf(number), 1);
            board[board.indexOf(number)] = null;
            if (combo.length === 0) {
               lastNumber = number;
               wonBoards.push(board);
               lastWonBoardNonPlayNumbersSum = 0;
               board.forEach(e => lastWonBoardNonPlayNumbersSum += Number(e));
            }
        }
    }
}

console.log('Результат: ' + (lastWonBoardNonPlayNumbersSum * lastNumber));
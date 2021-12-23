let entries = document.getElementsByTagName('pre')[0].innerText.trim().split('\n').map(e => e.split('|').map(e => e.trim().split(' ')));

class DuplexHash {
    straight = {};
    reverse = {};
    set(key, reverseKey) {
        this.straight[key] = reverseKey;
        this.reverse[reverseKey] = key;
        return this;
    }
    getByStraight(key) {
        return this.straight[key];
    }
    getByReverse(reverseKey) {
        return this.reverse[reverseKey];
    }
}

function specialContains(str, substr) {
    return substr.split('').every(c => str.indexOf(c) !== -1);
}

function specialEquals(firstStr, secondStr) {
    return firstStr.split('').sort().join('') === secondStr.split('').sort().join('');
}

function sorString(str) {
    return str.split('').sort().join('');
}

let total = 0;

entries.forEach(entry => {
    let part1 = entry[0];

    let hash = new DuplexHash();
    hash
        .set(sorString(part1.find(c => c.length === 2)), 1)
        .set(sorString(part1.find(c => c.length === 4)), 4)
        .set(sorString(part1.find(c => c.length === 3)), 7)
        .set(sorString(part1.find(c => c.length === 7)), 8);

    hash
        .set(sorString(part1.find(c => c.length === 6 && specialContains(c, hash.getByReverse(1)) && !specialContains(c, hash.getByReverse(4)) && specialContains(c, hash.getByReverse(7)))), 0)
        .set(sorString(part1.find(c => c.length === 6 && !specialContains(c, hash.getByReverse(1)) && !specialContains(c, hash.getByReverse(4)) && !specialContains(c, hash.getByReverse(7)))), 6)
        .set(sorString(part1.find(c => c.length === 6 && specialContains(c, hash.getByReverse(1)) && specialContains(c, hash.getByReverse(4)))), 9)
        .set(sorString(part1.find(c => c.length === 5 && specialContains(c, hash.getByReverse(1)))), 3);

    hash
        .set(sorString(part1.find(c => c.length === 5 && !specialContains(c, hash.getByReverse(1)) && !specialContains(hash.getByReverse(6), c))), 2)
        .set(sorString(part1.find(c => c.length === 5 && !specialContains(c, hash.getByReverse(1)) && specialContains(hash.getByReverse(6), c))), 5);

        let resultNumber = '';

        entry[1].forEach(c => {
            resultNumber += hash.getByStraight(sorString(c));
        });

        total += parseInt(resultNumber, 10);

});

console.log('Результат: ' + total);

const fs = require('fs');
const pt = require('path');
const path = pt.join(__dirname, 'input.txt');

fs.readFile(path, (err, rawData) => {
    if (err) return console.error(err);
    let data = rawData.toString().trim().split(/\s+/g);

    /*/// part 1

    let threes = 0;
    let twos = 0;

    for (let id of data) {
        let matched = [];
        let three = false;
        let two = false;
        for (let chr of id) {
            if (!!~matched.indexOf(chr)) continue;
            let match = id.match(new RegExp(chr, 'g'));
            matched.push(chr);
            if (!three && match.length === 3) three = true;
            if (!two && match.length === 2) two = true;
            if (three && two) break;
        }
        if (three) threes++;
        if (two) twos++;
    }

    console.log(threes * twos);

    /*/// part 2

    let final = { id1: '', id2: '' };

    for (let id1 of data) {
        let brk = false;
        for (let id2 of data) {
            if (id1 === id2) continue;
            let anomalies = 0;
            for (let i = 0; i < id1.length; i++) {
                if (id1.charAt(i) !== id2.charAt(i)) {
                    anomalies++;
                    if (anomalies > 1) break;
                }
            }
            if (anomalies === 1) {
                final.id1 = id1;
                final.id2 = id2;
                brk = true;
                break;
            }
        }
        if (brk) break;
    }

    let output = '';
    for (let i = 0; i < final.id1.length; i++) {
        if (final.id1.charAt(i) === final.id2.charAt(i)) {
            output += final.id1.charAt(i);
        }
    }
    console.log(output);

    //*/
});

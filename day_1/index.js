
const fs = require('fs');
const pt = require('path');
const path = pt.join(__dirname, 'input.txt');

fs.readFile(path, (err, rawData) => {
    if (err) return console.error(err);
    let data = rawData.toString().match(/[+-]\d+/g);

    /*/// part 1
    data[0] = parseInt(data[0]);
    console.log(data.reduce((acc, val) => acc + parseInt(val)));

    /*/// part 2
    let freqs = [];
    let freq = 0;
    let tries = 0;

    while (tries < 10) {
        for (let add of data) {
            freq += parseInt(add);

            if (freqs.indexOf(freq) != -1) {
                console.log('poop : ' + freq);
                return;
            }

            freqs.push(freq);
        }
    }

    //*/
});

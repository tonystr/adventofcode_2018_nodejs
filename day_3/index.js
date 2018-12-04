
const fs = require('fs');
const pt = require('path');
const path = pt.join(__dirname, 'input.txt');

fs.readFile(path, (err, rawData) => {
    if (err) return console.error(err);
    const stringData = rawData.toString().trim();

    const regex = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;
    const data = stringData.split('\n').map(str => {
        const match = str.match(regex);
        return {
            id: match[1],
            x: parseInt(match[2]),
            y: parseInt(match[3]),
            width:  parseInt(match[4]),
            height: parseInt(match[5])
        };
    });

    const grid = {};

    for (const claim of data) {
        for (let x = claim.x; x < claim.x + claim.width; x++) {
            for (let y = claim.y; y < claim.y + claim.height; y++) {
                const coord = `x:${x},y:${y}`;
                grid[coord] = (grid[coord] || '') + '#' + claim.id;
            }
        }
    }

    /*/// part 1

    let total = 0;
    for (const cell in grid) {
        if (grid[cell] > 1) total++;
    }

    console.log(total);

    /*/// part 2

    for (const claim of data) {
        let overlaps = false;
        for (let x = claim.x; x < claim.x + claim.width; x++) {
            for (let y = claim.y; y < claim.y + claim.height; y++) {
                if (grid[`x:${x},y:${y}`] !== '#' + claim.id) {
                    overlaps = true;
                    break;
                }
            }
            if (overlaps) break;
        }
        if (!overlaps) console.log(claim);
    }

    //*/
});

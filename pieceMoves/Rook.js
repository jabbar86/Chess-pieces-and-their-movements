'use strict';

/**
 * The rook moves horizontally or vertically, through any number of squares
 * We have to find all the possible locations the rook can move to from the given location.
 */
const helpers = require('./../utils/Helpers');

const findPosition = (positionRow, positionColumn) => {
    try {
        const row = helpers.getRowNumbers(positionRow);
        const col = positionColumn;
        let rows = {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
            E: 5,
            F: 6,
            G: 7,
            H: 8
        };
        const row_letters = Object.values(rows);
        let valid_moves = [];

        for (let i of row_letters) {
            if (i === row) {
                for (let j = 1; j <= 8; j++) {
                    if (j != col)
                        valid_moves.push(`${helpers.getRowLetters(row_letters[i])}${j}`);
                }
            }
            if (i !== row) {
                valid_moves.push(`${helpers.getRowLetters(i)}${col}`);
            }
        }

        return valid_moves;
    } catch (error) {
        console.log("Error \n", error);
    }

}
module.exports.findPosition = findPosition
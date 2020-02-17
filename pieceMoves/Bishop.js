'use strict';
/**
 * The bishop can be moved any number of unoccupied squares in diagonally.
 * We have to find all the possible locations the Bishop can move to from the given location.
 */
const helpers = require('./../utils/Helpers');
const findPosition = (positionRow, positionColumn) => {
    try {
        const row = helpers.getRowNumbers(positionRow);
        console.log("ROW \n", row)
        const col = positionColumn;
        console.log("Column \n", col);
        let valid_moves = [];

        for (let i = 1; i <= row; i++) {
            if (row - i > 0) {
                valid_moves.push(helpers.getRowLetters(row - i) + (col + i));
            }
        }

        for (let i = 1; i <= (8 - col); i++) {
            if ((row + i) <= 8) {
                valid_moves.push(helpers.getRowLetters(row + i) + (col + i));
            }
        }

        for (let i = 1; i <= (8 - row); i++) {
            if ((col - i) > 0) {
                valid_moves.push(helpers.getRowLetters(row + i) + (col - i));
            }
        }

        for (let i = row; i >= 0; i--) {
            if (col - i > 0 && col - i != col) {
                valid_moves.push(helpers.getRowLetters(row - i) + (col - i));
            }
        }

        return valid_moves;
    } catch (error) {
        console.log("Error \n", error);
    }

}

module.exports.findPosition = findPosition;
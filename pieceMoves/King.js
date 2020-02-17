'use strict';
const helpers = require('./../utils/Helpers');
const findPosition = (positionRow, positionColumn) => {
    try {

        const row = helpers.getRowNumbers(positionRow);
        const col = positionColumn;

        let valid_moves = [];

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (row - i != 0)
                    if (col - j > 0 && col - j <= 8)
                        if (!((row - i) == row && (col - j) == col)) {
                            valid_moves.push(
                                helpers.getRowLetters(row - i) + (col - j)
                            );
                        }
            }
        }

        return valid_moves;

    } catch (error) {
        console.log("Error \n", error);
    }
}

module.exports.findPosition = findPosition;
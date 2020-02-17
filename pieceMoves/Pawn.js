'use strict';
const helpers = require('./../utils/Helpers');

const findPosition = (positionRow, positionColumn) => {
    try {
        const row = helpers.getRowNumbers(positionRow);
        const col = positionColumn;

        let valid_moves = [];

        if (col != 1 && col != 8) {
            valid_moves.push(helpers.getRowLetters(row) + (col + 1));
            valid_moves.push(helpers.getRowLetters(row) + (col - 1));
        }

        return valid_moves;
    } catch (error) {
        console.log("Error \n", error);
    }

}
module.exports.findPosition = findPosition
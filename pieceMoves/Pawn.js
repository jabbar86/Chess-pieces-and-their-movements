'use strict';
/**
 * The pawn can only move one space forward
 * We have to find all the possible locations the pawn can move to from the given location.
 */

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
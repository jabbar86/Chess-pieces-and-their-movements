'use strict';
/* Horse Can move across the board only in 2.5 steps.
 * 2 vertical steps and 1 horizontal step.
 * A hourse can move in 8 possible directions.*/
const helpers = require('./../utils/Helpers');

const findPosition = (positionRow, positionColumn) => {
    try {
        const row = helpers.getRowNumbers(positionRow);
        const col = positionColumn;

        let valid_moves = [];
        /**
         * possibilities array for house movement
         */
        const rowStepsArray = [2, 2, -2, -2, 1, 1, -1, -1];
        const colStepsArray = [-1, 1, 1, -1, 2, -2, 2, -2];

        /**
         * horse movement formula
         * (row + rowStep[i], col + colStep[i])
         */
        for (let i = 0; i <= 7; i++) {
            let estimationRowMoves = row + rowStepsArray[i];
            let esitmationColumnMoves = col + colStepsArray[i];

            if (
                (estimationRowMoves > 0 && estimationRowMoves <= 8) &&
                (esitmationColumnMoves > 0 && esitmationColumnMoves <= 8)
            ) {
                valid_moves.push(helpers.getRowLetters(estimationRowMoves) + esitmationColumnMoves)
            }
        }

        return valid_moves;
        
    } catch (error) {
        console.log("Error \n", error);
    }

}

module.exports.findPosition = findPosition;
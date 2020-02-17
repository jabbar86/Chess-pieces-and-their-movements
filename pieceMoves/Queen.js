'use strict';

/**
 * The queen can be moved any number of unoccupied squares in a straight
 * line vertically, horizontally, or diagonally.
 * The Queen is a combination of Rook and Bishop
 * We have to find all the possible locations the Queen can move to from the given location
 */
const Bishop = require('./Bishop');
const Rook = require('./Rook');
const helpers = require('./../utils/Helpers');

const findPosition = (positionRow, positionColumn) => {
    try {
        const rookMoves = Rook.findPosition(positionRow, positionColumn);
        const bishopMoves = Bishop.findPosition(positionRow, positionColumn);

        let mergeMoves = rookMoves.concat(bishopMoves);
        return mergeMoves;
    } catch (error) {
        console.log("Error :\n", error);
    }

}

module.exports.findPosition = findPosition;
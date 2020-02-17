const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('@hapi/joi');
const Bishop = require('./pieceMoves/Bishop');
const King = require('./pieceMoves/King');
const Queen = require('./pieceMoves/Queen');
const Horse = require('./pieceMoves/Horse');
const Rook = require('./pieceMoves/Rook');
const Pawn = require('./pieceMoves/Pawn');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    //res.sendFile(__dirname + '/script.html')
    res.status(200).send("App Started!!!!")
})

app.post('/piecesMovement', async (req, res) => {
    console.log("Request Body \n", req.body);
    let piece = req.body.piece;
    let position_row = req.body.position_row.toUpperCase();
    let position_column = parseInt(req.body.position_column);

    let possibleMoves = ""
    const schema = Joi.object().keys({
        piece: Joi.string().required(),
        position_row: Joi.string().required(),
        position_column: Joi.number().required(),
    });

    const result = schema.validate({
        piece: piece,
        position_row: position_row,
        position_column: position_column,
    });


    if (result && result.error) {
        console.log(result.error);
        let errorObj = {
            code: 404,
            data: null,
            error: { message: result.error.details[0].message },
            message: result.error.details[0].message
        };
        return errorObj;
    }

    piece = piece.toUpperCase();

    if (position_row < 'A' || position_row > 'H') {
        return res.status(500).send({ code: 500, message: "Invalid Row.", data: null, error: { message: "Invalid Row." } })
    }

    if (position_column < 1 || position_column > 8) {
        return res.status(500).send({ code: 500, message: "Invalid Column.", data: null, error: { message: "Invalid Column." } })
    }

    switch (piece) {
        case 'KING':
            possibleMoves = King.findPosition(position_row, position_column);
            console.log("King Moves \n", possibleMoves);
            res.status(200).send({code: 200, message: "King Moves", data: possibleMoves, error: null})
            break;
        case 'QUEEN':
            possibleMoves = Queen.findPosition(position_row, position_column);
            console.log("Queen Moves \n", possibleMoves);
            res.status(200).send({code: 200, message: "Queen Moves", data: possibleMoves, error: null})
            break;
        case 'BISHOP':
            possibleMoves = Bishop.findPosition(position_row, position_column);
            console.log("Bishop Moves \n", possibleMoves);
            res.status(200).send({code: 200, message: "Bishop Moves", data: possibleMoves, error: null})
            break;
        case 'HORSE':
            possibleMoves = Horse.findPosition(position_row, position_column);
            console.log("Horse Moves \n", possibleMoves);
            res.status(200).send({code: 200, message: "Horse Moves", data: possibleMoves, error: null})
            break;
        case 'ROOK':
            possibleMoves = Rook.findPosition(position_row, position_column);
            console.log("Rook Moves \n", possibleMoves);
            res.status(200).send({code: 200, message: "Rook Moves", data: possibleMoves, error: null})
            break;
        case 'PAWN':
            possibleMoves = Pawn.findPosition(position_row, position_column);
            console.log("Pawn Moves \n", possibleMoves);
            res.status(200).send({code: 200, message: "Pawn Moves", data: possibleMoves, error: null})
            break;
        default : 
            res.status(403).send({code: 403, message: "Invalid Piece Enter.", data: null, error: { message: "Invalid Piece Enter."}})

    }

});

app.listen(process.env.PORT || 3005, () => {
    console.log("started web process at Port 3005");
});
function getRowNumbers(position) {
    const rowPosition = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8
    };

    try {
        return rowPosition[position]
    } catch (err) {
        console.error(err);
        throw err;
    }
}

function getRowLetters(position) {
    const rowPosition ={
        1 : "A",
        2 : "B",
        3 : "C",
        4 : "D",
        5 : "E",
        6 : "F",
        7 : "G",
        8 : "H"
    };
    try {
        return rowPosition[position]
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.getRowNumbers = getRowNumbers;
module.exports.getRowLetters = getRowLetters;
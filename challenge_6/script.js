'use strict';

let dauphinsScores = [
    [44, 23, 71],
    [85, 54, 41],
    ];

let koalasScores = [
    [65, 54, 49],
    [23, 34, 27],
    ];

function calcAverage(array) {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    let total = array.reduce(reducer);
    let average = total / array.length;
    return Math.round(average);
}

for (let i = 0; i < dauphinsScores.length; i++) {
    console.log(calcAverage(dauphinsScores[i]));
}

for (let i = 0; i < koalasScores.length; i++) {
    console.log(calcAverage(koalasScores[i]));
}

function checkWinner(dauphinsScores, koalasScores) {
    for (let i = 0; i < dauphinsScores.length; i++) {
        if (calcAverage(dauphinsScores[i]) > calcAverage(koalasScores[i])*2) {
            console.log(`L'équipe Dauphin gagne (${calcAverage(dauphinsScores[i])} vs ${calcAverage(koalasScores[i])})`);
        }
        else if (calcAverage(dauphinsScores[i]) < calcAverage(koalasScores[i])*2) {
            console.log(`L'équipe Dauphin gagne (${calcAverage(koalasScores[i])} vs ${calcAverage(dauphinsScores[i])})`);        
        } else {
        console.log("Pas de gagnant")
        }
    }
    } 
    
checkWinner(dauphinsScores, koalasScores);






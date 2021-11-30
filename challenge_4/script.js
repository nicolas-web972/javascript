'use strict';

let dauphinsScores = [
    [96, 108, 89],
    [97, 112, 101],
    [97, 112, 101],
    ];

let koalasScores = [
    [88, 91, 110],
    [109, 95, 123],
    [109, 95, 106],
    ];

function averageScore(array) {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    let total = array.reduce(reducer);
    let average = total / array.length;
    return Math.round(average);
}

for (let i = 0; i < dauphinsScores.length; i++) {
    console.log(averageScore(dauphinsScores[i]));
}

for (let i = 0; i < koalasScores.length; i++) {
    console.log(averageScore(koalasScores[i]));
}

function compareAverages(dauphinsScores, koalasScores) {
    for (let i = 0; i < dauphinsScores.length; i++) {
        if (averageScore(dauphinsScores[i]) > 100 || averageScore(koalasScores[i]) > 100){
        if (averageScore(dauphinsScores[i]) > averageScore(koalasScores[i])) {
            console.log("Le gagnant est la team Dauphins");
        }
        else if (averageScore(dauphinsScores[i]) < averageScore(koalasScores[i])) {
            console.log("Le gagnant est la team Koalas");
        }
        else if (averageScore(dauphinsScores[i]) == averageScore(koalasScores[i])) {
            console.log("Egalité ");
        }
        } else {
        console.log("Pas de gagnant")
        }
    }
    } 
    
compareAverages(dauphinsScores, koalasScores);






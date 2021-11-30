'use strict';
//1
const bernard1 = {
    name : 'Bernard',
    weight : 78,
    height : 1.69,
};

const bernard2 = {
    name : 'Bernard',
    weight : 95,
    height : 1.88,
};

const marcel1 = {
    name : 'Marcel',
    weight : 92,
    height : 1.95,
};

const marcel2 = {
    name : 'Marcel',
    weight : 85,
    height : 1.76,
};

let imcBernard1 = Math.round(bernard1.weight/(bernard1.height*bernard1.height)*10)/10;
let imcBernard2 = Math.round(bernard2.weight/(bernard2.height*bernard2.height)*10)/10;
let imcMarcel1 = Math.round(marcel1.weight/(marcel1.height*marcel1.height)*10)/10;
let imcMarcel2 = Math.round(marcel2.weight/(marcel2.height*marcel2.height)*10)/10;

console.log(imcBernard1);
console.log(imcBernard2);
console.log(imcMarcel1);
console.log(imcMarcel2);

//

let bernardHigherIMC = imcBernard1 > imcMarcel1;

if (bernardHigherIMC) {
    console.log(`Bernard a un IMC (${imcBernard1}) plus élevé que Marcel (${imcMarcel1})`);
    }
    else {
        console.log(`Marcel a un IMC (${imcMarcel1}) plus élevé que Bernard (${imcBernard1})`);
    }
let bernardHigherIMC1 = imcBernard2 > imcMarcel2
    if (bernardHigherIMC1) {
        console.log(`Bernard a un IMC (${imcBernard2}) plus élevé que Marcel (${imcMarcel2})`);
    }
    else {
        console.log(`Marcel a un IMC (${imcMarcel2}) plus élevé que Bernard (${imcBernard2})`);
    };



let person=[bernard1, marcel1, bernard2, marcel2];

person.forEach((element) => {
let imc = Math.round(element.weight / (element.height * element.height) *10)/10;
switch(true) {
    case imc < 20:
        console.log(`${element.name} : Insuffisance pondérale`);
        break;

    case imc >= 20 && imc < 25:
        console.log(`${element.name} : Poids normal`);
        break;
    
    case imc >= 25 && imc < 30:
        console.log(`${element.name} : Surpoids`);
        break;

    case imc >= 30 && imc < 40:
        console.log(`${element.name} : Obésité`);
        break;

    case imc < 40:
        console.log(`${element.name} : Obésité importante`);
        break;
    
}
});











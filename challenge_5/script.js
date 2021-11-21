'use strict';

let bill;

const amount = (bill) =>
  bill > 50 && bill < 300 ?
  "La note était de " + bill + ", le pourboire de " + bill*0.15 + " et la valeur totale était de " + bill*1.15 + "." :
  "La note était de " + bill + ", le pourboire de " + bill*0.2 + " et la valeur totale était de " + bill*1.2 + "." ;

bill = [275, 40, 430];

console.log(amount(bill[0]));
console.log(amount(bill[1]));
console.log(amount(bill[2]));
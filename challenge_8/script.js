'use strict';
const arrayBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

let calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return ( bill * 0.15);
  } else {
    return (bill * 0.2);
  }
}

  tips = arrayBills.map((element) => {
  return calcTip(element);
});
console.log(tips);

let i = 0;

for (; i < arrayBills.length; i++) {
  totals[i] = arrayBills[i] + tips[i];
}
console.log(totals);

const sumTotals = totals.reduce((max, curr) => max + curr, 0);
const calcAverage = sumTotals / totals.length || 0;

console.log(calcAverage);
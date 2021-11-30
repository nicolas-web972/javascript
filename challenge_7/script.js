'use strict';

const calcTip = (bill) => {
  const tip = bill >= 50 && bill <=300 ? 0.15 : 0.2;
  return bill * tip;
};
console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [];
bills.forEach((bill) => {
  tips.push(calcTip(bill));
});
 console.log("Tips :", tips);

const totals = [];
for (let i = 0; i < bills.length; i++) {
  totals[i] = bills[i] + tips[i];
}
console.log("totals :", totals);
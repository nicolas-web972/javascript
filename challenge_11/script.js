'use strict';

const bernard = {
  firstName: "Bernard",
  weight: "78",
  height: "1.69",
  calcBMI: function () {
    return (this.weight / (this.height * this.height)).toFixed(1);
  },
 
};

const marcel = {
  firstName: "Marcel",
  weight: "92",
  height: "1.95",
  calcBMI: function () {
    return (this.weight / (this.height * this.height)).toFixed(1);
  },
  bmi: "",
};

console.log((bernard.bmi = bernard.calcBMI()));
console.log((marcel.bmi = marcel.calcBMI()));

console.log(
  `L'IMC de ${bernard.firstName} (${bernard.bmi}) est plus élevé que celui de ${marcel.firstName} (${marcel.bmi})`
);

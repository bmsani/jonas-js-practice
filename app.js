// const markMiller = {
//     firstName: 'mark',
//     height: 1.69,
//     weight: 78,
//     calcBMI: function (){
//         const bodyMass = this.weight / (this.height * this.height)
//         return bodyMass;
//     }
// }

// const johnSmith = {
//     firstName: 'jhon',
//     height: 1.95,
//     weight: 112,
//     calcBMI: function (){
//         const bodyMass = this.weight / (this.height * this.height)
//         return bodyMass;
//     }
// }

// if(markMiller.calcBMI() > johnSmith.calcBMI()){
//     console.log(`${markMiller.firstName}'s BMI ${markMiller.calcBMI()} is higher than ${johnSmith.firstName}'s ${johnSmith.calcBMI()}`)
// }
// else{
//     console.log(`${johnSmith.firstName}'s BMI ${johnSmith.calcBMI()} is higher than ${markMiller.firstName}'s ${markMiller.calcBMI()}`)
// }

// console.log(markMiller.calcBMI());

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  function calcTip(bills, tips, totals) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tips.push(bills[i] * 0.15);
      totals.push(bills[i] + tips[i]);
    } else {
      tips.push(bills[i] * 0.2);
      totals.push(bills[i] + tips[i]);
    }
  }
  calcTip(bills, tips, totals);
}
const sani = 'md asgar sani';

function calcAvarage(totals) {
  let sum = 0;
  for (let i = 0; i < totals.length; i++) {
    sum = sum + totals[i];
  }

  const avarage = sum / totals.length;
  return avarage;
}

const avarageTotal = calcAvarage(totals);

console.log(avarageTotal);
cl

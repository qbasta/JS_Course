let markWeight, markHeight;
let johnWeight, johnHeight;

markWeight = prompt("Input Marks weight:");
markHeight = prompt("Input Marks height:");

johnWeight = prompt("Input Johns weight:");
johnHeight = prompt("Input Johns height:");

console.log(markHeight, markWeight);
console.log(johnHeight, johnWeight);
const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

alert(markHigherBMI);
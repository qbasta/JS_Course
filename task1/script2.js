// falsy values 0, '', undefined, null, NaN

const dolphAvg = 80;
const koalAvg = 88;
console.log(dolphAvg, koalAvg);

if (dolphAvg < 100 && dolphAvg < koalAvg && koalAvg >= 100) {
    console.log(`Dolphins have less than 100 points! Koalas win!`)
} else if (koalAvg < 100 && koalAvg < dolphAvg && dolphAvg >= 100) {
    console.log(`Koalas have less than 100 points! Dolphins win!`)
} else if (koalAvg >= 100 && dolphAvg >= 100 && dolphAvg === koalAvg) {
    console.log(`There is a draw!`)
} else {
    console.log(`Nobody won!`)
}
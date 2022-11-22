let name = prompt('Твоє імя?');
//let hello = 'Привіт';

let radius = prompt('Який радіус кола');
let radiusNew = Number(radius);
let pi = 3.14;
let distance = prompt('яка відстань між містами?');
let distanceNew = Number(distance);
let time = prompt('за скільки годин ти хочеш туди дістатися?');
let timeNew = Number(time);
let dollar = prompt('Скільки долларів ви хочете конвертувати?');
let dollarNew = Number(dollar);
const kursdol = 36.90;
const kurseuro = 38.18;

console.log(name);
//console.log(name + hello);
console.log(pi * radiusNew * radiusNew);
console.log(distanceNew / timeNew);
console.log(dollarNew * kursdol / kurseuro);
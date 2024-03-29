// No need to explicit declare types
const carMakers = ['ford', 'toyota', 'chevy'];

// Explicit declaration needed
let carMakers2: string[] = [];
carMakers2 = ['ford', 'toyota', 'chevy'];

// Declaring arrays of arrays
// const carsByMake: string[][] = ...
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values
const car2 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
})

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());


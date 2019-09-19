// === is the equality operator
// Actualy === is the strict equal
// you can use == to ignore the type of data
// !== this is the not equal operator
// < this is the less than operator
// > this is the grater than operator
// <= less or equal
// >= grater or equal

let temp = 31
let isFreezing = temp < 32

console.log(isFreezing)

// Challange area

// Create age
let age = 26
// Calculate is child - if they are 7 or under
let isChild = age <= 7
// Calculate is senior - if they are 65 or older
let isSenior = age >= 65

// Print to the console
console.log(isChild)
console.log(isSenior)
let temp = 31
let isFreezing = temp <= 32

// you need to use the word if, followed by a parantesis followed by curly braces
// Everything inside the curly braces is a code block
// Talk about 'identação'
if (isFreezing) {
    console.log('It is freezing outside!')
}

// It is the same thing
if (temp <= 32) {
    console.log('It is freezing outside!')
}

if (temp >= 110) {
    console.log('It is way to hot outside!')
}

// Challenge area
let age = 6
// if 7 or under print message about child pricing
if (age <= 7){
    console.log('Free ticket for childs')
}

// if 65 or older print message about senior discount
if (age >= 65){
    console.log('50% Discount for senior')
}

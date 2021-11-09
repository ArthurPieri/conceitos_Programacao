// Declaring as an object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

// But we could use a tuple
const pepsi = ['brown', true, 40];
// But this way we can swap the order and lose information
// The tuple annotation
const coke: [string, boolean, number] = ['brown', true, 21];
// Now we have a fixed order to the elements
// We can also use type definitions to make our code simplier
const guarana: Drink = ['goldish', true, 30];
// Notice that Drink represent tha same thing as [string, boolean, number]
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// What does the following numbers mean?
const carSpecs: [number,number] = [400, 3354];
// Using useful data as an object
const carStats = {
  horsepower: 400,
  weight: 3354
};
// Now I know that 400 is the horsepower and 3354 is the weight in a very clear way
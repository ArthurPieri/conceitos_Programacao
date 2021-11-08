const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age
  }
};

// When using destructuring we have to name the variable and its type
// not only the type, but only when using destructuring
// because we could be destructuring multiple properties with multiple types
const { age }: { age: number } = profile;

// It can become pretty ugly when using destructuring like so:
const { 
  coords: {lat, lng }
  }: { coords: {lat: number; lng: number} } = profile;

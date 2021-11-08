const add = (a: number, b: number): number => {
  return a + b;
}

// Error
// The type inference expects nothing to be returned
const subtract = (a: number, b: number) => {
  a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a:number, b:number): number {
  return a*b
}

const logger = (message: string): void => {
  console.log(message)
  // Void means there is no return value, but Could also return
  // null
  // undefined
}

// :never, when we are sure that the function will NEVER return a value
// wich means we do not expect to "see the end" of the function
const throwError = (message: string): never => {
  throw new Error(message);
} 

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: {date: Date; weather: string}):void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

// ES2015
const logWeatherES2015 = ({ date, weatcher}) => {
  console.log(date)
  console.log(weatcher)
}

//Typescript
const logWeatherDestructiring = ({
  date, 
  weather
}: { 
  date: Date;
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather);

// Annotations around objects
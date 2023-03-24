const add = (a: number, b: number): number => {
  return a + b;
};

// using the function keyword for a function
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void means that the function does not return anything
const logger = (message: string): void => {
  console.log(message);
};
logger('Hello World');

// never means that the function will never reach the end of the function
const throwError = (message: string): never => {
  throw new Error(message);
};
throwError('This is an error');

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// use destructuring to make the code cleaner
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);

const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date(), new Date()];

const carsByMake = [['f150'], ['mustang']];

// Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates = [new Date(), '1986-0905'];
importantDates.push('2035-1-1');
importantDates.push(new Date());

const drink = {
  color: 'blue',
  carbonated: true,
  sugar: 68,
};

const otherDrink: [string, boolean, number] = ['blue', true, 40];

// type alias
type Drink = [string, boolean, number];
const anotherDrink: Drink = ['red', false, 70];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};

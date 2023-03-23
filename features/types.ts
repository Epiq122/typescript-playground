const today: Date = new Date();
today.getMonth();
// today.hi(); Property 'hi' does not exist on type 'Date'.
console.log(today);

const person: {
  age: number;
} = {
  age: 20,
};

class Color {}

const red = new Color();

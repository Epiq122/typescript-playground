class Vehicle {
  drive(): void {
    console.log('Vroom Vrooooom');
  }

  honk(): void {
    console.log('Honk honk');
  }
}

// Takes all the methods from Vehicle

class Car extends Vehicle {
  drive(): void {
    console.log('Car sounds');
  }
}
class Truck extends Vehicle {
  honk(): void {
    console.log('Truck Honk');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car1 = new Car();
car1.drive();
car1.honk();

const truck1 = new Truck();
truck1.drive();
truck1.honk();

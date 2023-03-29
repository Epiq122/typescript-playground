class Vehicle {
  honk(): void {
    console.log('Honk honk');
  }
}

// Takes all the methods from Vehicle

class Car extends Vehicle {
  private drive(): void {
    console.log('Car sounds');
  }
  starDrivingProcess(): void {
    this.drive();
  }
}
class Truck extends Vehicle {
  honk(): void {
    console.log('Truck Honk');
  }
}

const car1 = new Car();
car1.starDrivingProcess();
car1.honk();

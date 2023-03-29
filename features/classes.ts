class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('Honk honk');
  }
}

const vehicle = new Vehicle('yellow');
console.log(vehicle.color);

// Takes all the methods from Vehicle
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('Car sounds');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'blue');
car.startDrivingProcess();

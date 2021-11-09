class Vehicle {
  /*   color: string;

  constructor(color: string) {
    this.color = color;
  } */
  // the same thing can be declared in a much simpler way with
  constructor(public color: string) {}

  drive(): void {
    console.log("They see me rollin'");
  }

  protected honk(): void {
    console.log('beep beep');
  }
}

// Inheritance
class Car extends Vehicle {
  // if we did not declare a constructor to a class tha extends another, TS will call the parent constructor
  // When declaring the constructor
  constructor(public wheels: number, color: string) {
    // We still need to call the constructor from the parent class the way to do it is by calling super()
    super(color);
  }

  // overwriting an method from parent class
  drive(): void {
    console.log('Vrooooommm');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('blue');
vehicle.drive();
console.log(vehicle.color);

const car = new Car(4, 'green');
car.startDrivingProcess();
console.log(car.color);

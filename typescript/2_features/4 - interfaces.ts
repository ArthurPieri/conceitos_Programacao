const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

// This type annotation is too long, and can become even longer
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
}

printVehicle(oldCivic);
//============================================================
//
//============================================================

// Using interfaces to help the code stay clean
interface Vehicle {
// We could also just ask for the property that exposes the function to access internal objects
  name: string;
  year: number;
  broken: boolean;
// We can add functions, or any Type in an interface 
  summary(): string;
}

const oldCorolla = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

const printVehicleInterface = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
}

printVehicleInterface(oldCorolla);

interface Reportable {
  summary(): string;
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const printReportableInterface = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
}

// I can still call the function providing tha same object
printReportableInterface(oldCorolla);
// Just to show that the interface now is much more generic
printReportableInterface(drink)
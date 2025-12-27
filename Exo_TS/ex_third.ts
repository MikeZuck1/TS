class Vehicle {
  brand: string;
  model: string;

  // decrire: () => void;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }
}

class Voiture extends Vehicle {
  numberOfDoors: number;

  constructor(brand: string, model: string) {
    super(brand, model);
    this.numberOfDoors = 4;
  }
}

class Moto extends Vehicle {
  cylinders: number;

  constructor(brand: string, model: string) {
    super(brand, model);
    this.cylinders = 2;
  }
}

const voiture = new Voiture("Toyota", "Corolla");
const moto = new Moto("Harley-Davidson", "Street 750");

console.log(
  `Voiture: ${voiture.brand} ${voiture.model}, Portes: ${voiture.numberOfDoors}`
);
console.log(`Moto: ${moto.brand} ${moto.model}, Cylindres: ${moto.cylinders}`);

let name: string = "John Doe";
let age: number = 30;
let isEmployed: boolean = true;

let hobbies: string[] = ["reading", "traveling", "swimming"];

console.log(
  `Name: ${name}, Age: ${age}, Employed: ${isEmployed}, Hobbies: ${hobbies.join(
    ", "
  )}`
);

let actif: boolean;
actif = false;
actif = true;

console.log(`Actif: ${actif}`);

let obj: {};
obj = { key: "value" };
console.log(`Object: ${JSON.stringify(obj)}`);

function greetArr(): number[] {
  let arr: Array<number> = [1, 2, 3, 4, 5];
  return arr;
}

console.log(`GreetArr: ${greetArr()}`);

let tuple: [string, string, number] = ["âge", "Alice", 25];
console.log(`l'${tuple[0]} d'${tuple[1]} est de ${tuple[2]} ans.`);

enum Role {
  ADMIN,
  USER,
  GUEST,
};
let userRole: Role = Role.ADMIN;
console.log(`User Role: ${Role[userRole]}`);

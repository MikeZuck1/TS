// const test: string = "Hello, TypeScript!";
// console.log(test);

interface Car {
  brand: string;
  make?: string; // Optional property
  color: string; // Required property
}

const myCar: Car = {
  brand: "Toyota",
  color: "Red",
};
console.log(myCar);

function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
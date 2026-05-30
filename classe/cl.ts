class Person {
  public name: string;
  public age: number;
  public adress: string;

  constructor(name: string, age: number, adress: string) {
    this.name = name;
    this.age = age;
    this.adress = adress;
  }

  sayHello(): void {}
}

class Employee extends Person {
  public department: string;

  constructor(name: string, age: number, adress: string, department: string) {
    super(name, age, adress); // Call the constructor of the parent cl
    this.department = department;
  }
}

class Manager {
  // short notation
  constructor(expression: string, age: number, adress: string) {}
}

interface ThoseUsers {
  name: string;
  age: number;
}

class Person implements ThoseUsers {
  public id: number;
  public name: string;
  public age: number;
  public email: string;

  constructor(id: number, name: string, age: number, email: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

interface myUsers {
  theUser: string;
  theAge: number;
}

interface theUsers extends myUsers {
  theLocation: string;
}

const Heruser: theUsers = {
  theUser: "Alice",
  theAge: 30,
  theLocation: "New York",
};

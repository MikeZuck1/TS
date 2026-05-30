interface Todo {
  id: number;
  texte: string;
  auteur: string;
}

// useful for updating only a subset of the properties of an object
function theUpdate(todo: Todo, update: Partial<Todo>) {
  return { ...todo, ...update }; // merge the original todo with the update
}

const todo: Todo = { id: 1, texte: "Apprendre TypeScript", auteur: "Alice" };
const updatedTodo = theUpdate(todo, {
  texte: "Apprendre TypeScript en profondeur",
});
console.log(updatedTodo);

interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(user: User, update: Partial<User>) {
  return { ...user, ...update }; // merge the original user with the update
}

let user: User = { id: 1, name: "Bob", email: "bob@example.com" };
user = updateUser(user, { name: "Robert" });
console.log(user);

interface Product {
  id: number;
  name: string;
  price: number;
}

function updateProduct(product: Product, update: Partial<Product>) {
  return { ...product, ...update }; // merge the original product with the update
}

const product: Product = { id: 1, name: "Laptop", price: 1000 };
const updatedProduct = updateProduct(product, { price: 900 });
console.log(updatedProduct);

type Profile = {
  firstName: string;
  lastName: string;
};

let userProfile: Partial<Profile> = {
  firstName: "John",
};

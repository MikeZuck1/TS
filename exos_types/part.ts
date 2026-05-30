// exo n°1
interface Todo {
  id: number;
  texte: string;
  auteur: string;
}

function updateTodo(todo: Todo, update: Partial<Todo>) {
  return { ...todo, ...update };
}

const mytodo: Todo = { id: 1, texte: "Learn TypeScript", auteur: "Alice" };
const theupdatedTodo = updateTodo(mytodo, {
  texte: "Learn TypeScript in depth",
});
console.log(theupdatedTodo);

// exo n°2
type TodoWithoutId = Omit<Todo, "id">;
type TodoResumee = Pick<Todo, "id" | "texte">;

// exo n°3
type nav = "home" | "about" | "contact";

const myPageInfo: Record<nav, string> = {
  home: "Welcome to the homepage",
  about: "Learn more about us",
  contact: "Get in touch with us",
};

// // exo n°4
// interface Config {
//   apiUrl: string;
//   timeout: number;
// }

// const infoPage: Readonly<Config> = {
//   apiUrl: "https://api.example.com",
//   timeout: 5000,
// };

// infoPage.apiUrl = "https://api.example.com"; // Error: Cannot assign to 'apiUrl' because it is a read-only property.

// exo n°5
type crm = "admin" | "user" | "guest";
type theCrmInfo = Exclude<crm, "guest">;
type theCrmInfo2 = Extract<crm, "admin" | "user">;

const userRole: theCrmInfo = "admin"; // Valid
const userRole2: theCrmInfo2 = "user"; // Valid
// const guestRole: theCrmInfo = "guest"; // Error: Type '"guest"' is not assignable to type 'theCrmInfo'.
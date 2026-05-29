interface See {
  apiUrl: string;
  time: number;
}

const readonlytodo: Readonly<See> = {
  apiUrl: "https://api.example.com/todos/1",
  time: 1627849200,
};

// readonlytodo.apiUrl = "https://api.example.com/todos/2"; // Error: Cannot assign to 'apiUrl' because it is a read-only property.
// readonlytodo.time = 1627849300; // Error: Cannot assign to 'time' because it is a read-only property.

console.log(readonlytodo)
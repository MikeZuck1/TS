interface Todo {
  id: number;
  texte: string;
  auteur: string;
}

type theTodoPreview = Omit<Todo, "id">;

const mytodo: theTodoPreview = {
  texte: "Apprendre TypeScript",
  auteur: "Alice",
};
console.log(mytodo);

interface Todo {
  id: number;
  texte: string;
  auteur: string;
}

type TodoPreview = Pick<Todo, "id" | "texte">; // create a new type with only the id and texte properties

const thetodo: TodoPreview = {
  id: 1,
  texte: "Apprendre TypeScript",
};
console.log(thetodo);

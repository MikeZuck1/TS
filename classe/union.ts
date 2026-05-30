let num: string | number;

interface User {
  name: string;
  lastName: string;
}

let oneSenetence = "";
let sentence = oneSenetence ?? "Default sentence";
console.log(sentence); // Output: "Default sentence"

// const test = 0 ?? 'content';
// console.log(test); // Output: 0

// let user: User | null;

// const a = new A();
// const b = new B();

// function bar(a: A | B) {
//   if (a instanceof A) {
//     a.methodA();
//   } else {
//     a.methodB();
//   }
// }

function ident<T>(param: T): T {
  return param;
}

let result1 = ident<string>("Hello");
console.log(result1); // Output: "Hello"

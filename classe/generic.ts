function display<k>(param: k[]): k {
  return param[0]; // return the first element of the array
}

display<string>(["Hello", "World"]); // Output: "Hello"
display<number>([1, 2, 3]); // Output: 1

interface funcGeneric<T, U> {
  (param1: T, param2: U): void;
}

interface PaireCleValeur<K, U> {
  key: K;
  value: U;
}

const paire: PaireCleValeur<string, number> = { key: "age", value: 30 };
const paire2: PaireCleValeur<string, string> = { key: "name", value: "Alice" };

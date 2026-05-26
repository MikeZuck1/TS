function t(i: bigint, x: null): void {}

const i = (a: number, b: boolean) => {};

// type before function
let y: (nbr1: number, nbr2: number) => void;


interface MyFunction {
  multiplier: (nbr1: number, nbr2: number) => number;
  data: number[];
}

let obj: MyFunction = {
  multiplier: (nbr1, nbr2) => nbr1 + nbr2,
  data: []
};

function add(x: number, y: number, z?: number, i = 5): number {
  return x + y + (z || 0) + i;
};

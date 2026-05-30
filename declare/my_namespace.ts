namespace Geometry {
  export interface Form {
    name: string;
  }
  export function air(param: number): number {
    return param * 2;
  }

  export class Circle implements Form {
    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }

    name: string = "Circle";
  }
}

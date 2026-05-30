/**
 * If we have many namespaces with the same name, they will be merged.
 */
/// <reference path="namespace.ts" />

namespace Validation {
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return /^[A-Za-z]+$/.test(s);
    }
  }
}

function add<T>(param: T): void {}
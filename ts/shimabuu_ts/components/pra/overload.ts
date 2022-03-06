// オーバーロード
function double(val: number): number;
function double(val: string): string;
// type Double = {
//   (val: number): number;
//   (val: string): string;
// };

// any でも型制約が効いてくれる
function double(val: any) {
  switch (typeof val) {
    case "number":
      return val * 2;
    case "string":
      return val + val;
  }
}
console.log(double(100));
console.log(double("ダブル"));

export class Twicer {
  twice(num: number): number;
  twice(str: string): string;
  twice<T>(arr: T[]): T[];

  // twice<T>(value: number | string | T[]): number | string | T[] {
  twice(value: any): any {
    if (typeof value === "number") {
      return value * 2;
    }
    if (typeof value === "string") {
      return value + value;
    }
    return [...value, ...value];
  }
}

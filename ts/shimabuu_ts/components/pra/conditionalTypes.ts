export type Props = {
  id: string;
  name: string;
  age: number;
};

// Ma ppedTypes
type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// "id" | "name" となる
type StringKeys = Filter<Props, string>;
const sk: StringKeys = "name";
type NumberKeys = Filter<Props, number>;
const nk: NumberKeys = "age";

const foo = (id: number, age: string, isMan: boolean) => "";
// infer: 部分的な型抽出, これは部分的に関数の返り値の型を抽出している
type Return<T> = T extends (...args: any) => infer U ? U : never;
type FooType = Return<typeof foo>; // stringが取れる
type ArgsType<T> = T extends (...args: [any, any, infer U, ...any[]]) => string
  ? U
  : never;
type FooArgsType = ArgsType<typeof foo>;

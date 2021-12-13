import type { NextPage } from "next";

// const と let では型推論の挙動に違いがある
const foo = "foo"; // "foo"
let bar = "bar"; // string

let foo2 = foo; // string wideningされちゃう
// wideningを防ぐ方法３つ
// const foo: "foo" = "foo"; // "foo"
// const foo = "foo" as "foo"; // "foo"
// const foo = "foo" as const; // "foo"

// Tuple
const foo3: [string, number, string] = ["str", 200, "str"];
// unknown は 利用する時に型が定義されていないことを教えてくれる、エラーが出る（利用する時に型安全）
const foo4: unknown = "foo";
foo.slice(2, 2);
// foo4.slice(3, 2) // エラー

// void
const func = (): void => {
  alert("ハロー");
  return undefined; // void = return undefined と同じなためエラーにならない
};

// never ありえない値
// const foo = (bar: "a" | "b") => {
//   switch (bar) {
//     case "a":
//       return 1;
//     case "b":
//       return 2;
//     default:
//       bar; // never型 defaultに到達するはずないので never型になる
//   }
// };

// オブジェクト（辞書型）
// null undefined 以外なんでも入ってしまう
let obj1: {} = 111;
// 非プリミティブ型であればなんでも入ってしまう
let obj2: object = [];
// Record
let obj3: Record<string, unknown> = { a: 1, b: "foo" };
// インデックスシグネチャ
let obj4: { [key: string]: unknown; foo: { bar: string } } = {
  a: 1,
  b: "bar",
  foo: {
    bar: "str",
  },
};

obj3.foo = "bar";
obj4.foo.bar = "";

console.log(obj4);

// intersection types
type Hoge = {
  a: string;
  b: number;
};
type HogeHoge = {
  c: number;
  d: boolean;
};
type HogeHogeHoge = Hoge | HogeHoge;
// Union Typesはどちらかを満たしていればOKになる（どちらかになる、ではない）
const test: HogeHogeHoge = {
  a: "",
  c: 11,
  d: false,
};

const Home: NextPage = () => {
  return <Component foo />;
};

const Component = (props: { foo?: true }) => {
  if (props.foo) {
    return <div>true</div>;
  }
  return <div>false</div>;
};

export default Home;

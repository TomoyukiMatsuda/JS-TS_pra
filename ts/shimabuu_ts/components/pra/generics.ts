// Genericsには初期値を設定できる
export type User<T = "大阪"> = {
  name: string;
  state: T;
};

type Japanese = User;
type American = User<"NY" | "LOS" | "CA">;

const matsu: Japanese = { name: "松田", state: "大阪" };
const jonnhy: American = { name: "松田", state: "LOS" };

// Generics型に制約をつける、初期値も併用してつけられる
export type Foo<T extends string | number = string> = {
  value: T;
};

type FooType = Foo<1 | 2 | 3 | 4>;
const matsudaAdana: Foo<"まっち" | "ともちん"> = {
  value: "まっち",
};
const num: FooType = { value: 3 };

// genericsを利用しない
const returnNum = (num1: number) => num1;
const returnStr = (str: string) => str;

const numnum = returnNum(25);
const strstr = returnStr("str");

// genericsを利用する
const returnVal = <T>(value: T) => value;
const s = returnVal<string>("str");
const n = returnVal<number>(11);

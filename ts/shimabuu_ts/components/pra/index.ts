export const obj = {};

// typeof は const と let で挙動が変わる、const: リテラルタイプス, let:
const foo = 123;
type Foo = typeof foo;

const obj1 = {
  foo: "foo",
  bar: "bar",
};
const obj2: typeof obj1 = {
  foo: "ふー",
  bar: "ばー",
};

function double(x: number | string) {
  if (typeof x === "string") {
    return Number(x) * 2;
  }
  return x * 2;
}

type Obj3 = {
  foo: string;
  bar: number;
};
type Key = keyof Obj3;
const key: Key = "foo"; // "foo" | "bar"

// keyof と typeof を組み合わせて利用する
const obj4 = {
  foo: "f",
  bar: "b",
};
type Obj4 = typeof obj4; // { foo: "f", bar: "b", };
type K = keyof Obj4; // // "foo" | "bar"
// ↓↓↓
// "foo" | "bar"
type KeyWithType = keyof typeof obj4;

const func = (x: keyof typeof obj4) => {
  return null;
};
// 'foo' or 'bar' しか入らない
func("foo");
func("bar");

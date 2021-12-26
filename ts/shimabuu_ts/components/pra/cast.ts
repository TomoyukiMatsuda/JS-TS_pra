export const color = "red" as const; // リテラルタイプス "red"

// オブジェクトでは型推論リテラルタイプスにならない
const theme = {
  color: "red",
  backgroundColor: "blue",
} as const; // as const でリテラルタイプスにできる、かつ readonly

let x = color;

function foo() {
  return { foo: "foo" } as const;
}

let f = foo();

// 定数定義によく利用されたりする
export const PATH = {
  INDEX: "/",
  LOGIN: "login",
  REGISTER: "/register",
} as const;

// ダブルアサーション
function getFirstLetter(str: number) {
  // 本来変換できないものを変換する、無理矢理
  return (str as unknown as string).charAt(0);
}

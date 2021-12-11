import type { NextPage } from "next";

// const と let では型推論の挙動に違いがある
const foo = "foo"; // "foo"
let bar = "bar"; // string

let foo2 = foo; // string wideningされちゃう
// wideningを防ぐ方法３つ
// const foo: "foo" = "foo"; // "foo"
// const foo = "foo" as "foo"; // "foo"
// const foo = "foo" as const; // "foo"

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

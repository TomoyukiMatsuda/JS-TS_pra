import { CFC } from "react";

// アンビエント宣言: 型の情報だけを伝える宣言
export declare var x: number;
x = 0;

// 環境変数の型拡張, NodeJS
declare global {
  namespace NodeJS {
    // NodeJS の processEnv型を拡張している
    interface ProcessEnv {
      readonly FOO: string;
    }
  }
}

process.env.FOO;

const Component: CFC = (props) => {
  return <div className={props.className}>コンポーネント</div>;
};

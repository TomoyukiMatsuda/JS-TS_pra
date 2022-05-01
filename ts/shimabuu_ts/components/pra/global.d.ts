import { FC } from "react";

declare module "react" {
  // react の FC を拡張, propsの型に className を付与
  type CFC<P = {}> = FC<P & { className?: string }>;
}

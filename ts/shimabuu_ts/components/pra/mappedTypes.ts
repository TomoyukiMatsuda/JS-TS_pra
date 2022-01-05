export type User = {
  name: string;
} & PersonalData;

//type Figi = "height" | "weight";
type Foo = {
  height?: number;
  weight?: number;
  realName?: string;
};

type PersonalData = {
  [K in keyof Foo]-?: number | string;
};

const user: User = {
  name: "まつ",
  height: 179,
  weight: 58,
  realName: "リアルネーム",
};

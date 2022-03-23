export type User = {
  name: string;
} & PersonalData;

//type Figi  = "height" | "weight";
type Foo = {
  height?: number;
  weight?: number;
  realName?: string;
};

// -? で?を除いた(オプショナルを除いた）型定義ができる、?をつければオプショナルになる
type PersonalData = {
  [K in keyof Foo]-?: Foo[K];
};

const user: User = {
  name: "まつ",
  height: 179,
  weight: 58,
  realName: "リアルネーム",
};

const data = {
  init: 1,
  active: 2,
} as const;

type DataType = {
  [K in keyof typeof data]: typeof data[K];
};
type Data = typeof data[keyof typeof data];

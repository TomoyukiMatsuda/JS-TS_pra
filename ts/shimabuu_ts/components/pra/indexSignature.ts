export type User = {
  name: string;
  age: number;
  [key: string]: string | number | undefined; // プロパティを string, number で追加できるようにする
};

const user: User = {
  name: "まつだ",
  age: 29,
  account: "tkmd35",
  job: "フロントエンドエンジニア",
};

user.gender; // 存在しないプロパティもエラーにならない
user.name;
user.age;
user.account; // 型が string | number | undefined のどれかになってしまう

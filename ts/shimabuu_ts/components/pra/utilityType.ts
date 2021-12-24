export const UtilityType = {};

type Person = {
  name: string;
  age: number;
  hobby?: string;
};
// 全てのプロパティがオプショナルではなくなる
type RequiredPerson = Required<Person>;
// 全てのプロパティがオプショナルになる
type PartialPerson = Partial<Person>;
const findPerson = async ({
  name = "ななし",
  age = 100,
  hobby = "食べること",
}: PartialPerson = {}): Promise<Person> => {
  return { name, age, hobby };
};
// 以下のようにデフォルト引数を設定することで
// PartialPerson = {} 関数呼び出し時に引数を省略できる
findPerson();
findPerson({ hobby: "散歩" });

// Record<Keys, Type>
// Keysに代入できる型は, string, number, symbol, とそれぞれのリテラル型
type StrNum = Record<string, number>;
const value: StrNum = {
  a: 11,
  b: 22,
  c: 33,
  d: 44,
};
type P = Record<"name" | "age" | "job", string | number>;
const person: P = {
  name: "ジョニー",
  age: 22,
  job: "Androidアプリエンジニア",
};

// Omit
type User = {
  surname: string;
  middleName?: string;
  givenName: string;
  age: number;
  address?: string;
  nationality: string;
  createdAt: string;
  updatedAt: string;
};
type Optional = "age" | "address" | "nationality" | "createdAt" | "updatedat";
type OmitUser = Omit<User, Optional>; // Omit はupdatedat(Aが小文字)に気づいてくれない、コンパイルエラーもでない

type SupportLang = "en" | "fr" | "it" | "es";
type Butterfly = {
  [key in SupportLang]: string;
};
const butterflies: Butterfly = {
  en: "Butterfly",
  fr: "Papillon",
  it: "Farfalla",
  es: "Mariposa",
  // ja: '蝶' // エラー
};

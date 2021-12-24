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

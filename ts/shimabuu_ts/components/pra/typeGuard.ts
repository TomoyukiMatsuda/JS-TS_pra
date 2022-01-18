export const hoge = (value: string | number) => {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    return value;
  }
  return value;
};

type UserA1 = { name: string; lang: "ja" };
type UserA2 = { name: string; lang: "en" };
type UserB = { name: string; nickName: string };

const foo = (value: UserA1 | UserA2 | UserB) => {
  if ("nickName" in value) {
    return value.nickName;
  }

  // タグ付きユニオンタイプス
  if (value.lang === "ja") {
    return value.name + " は日本人";
  }
  return value.name + " は外国人";
};

const isUserA = (user: UserA1 | UserA2): user is UserA1 => {
  return user.lang === "ja";
};

const fn = (val: any) => {
  if (isUserA(val)) {
    return val.name + " はUserA1です";
  }
  return val;
};

export const UserStatusValue = {
  non: 0,
  init: 1,
  active: 2,
} as const;

type UserStatusKeyType = keyof typeof UserStatusValue;
type UserStatusValueType = typeof UserStatusValue[keyof typeof UserStatusValue];

export const getKeyByValue = <
  OBJECT extends Record<string | number, any>,
  KEY extends keyof OBJECT,
  VALUE extends OBJECT[KEY]
>(
  obj: OBJECT,
  val: VALUE
): KEY => {
  // key と value を逆にしたオブジェクトを生成
  const keyValueReversedObj: Record<VALUE, KEY> = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );

  // そのオブジェクトから key（第２引数の val)に応じた値を取得
  return keyValueReversedObj[val];
};

// 第一引数をセットした時点で、第二引数に取れる値が限定されるためUserStatusValueに存在しないvalueを第二引数に指定するとエラーになる
// Argument of type '3' is not assignable to parameter of type '0 | 1 | 2'.
// const key = getKeyByValue(UserStatusValue, 3);
const key = getKeyByValue(UserStatusValue, 2);
console.log(key);

// こんな関数を各オブジェクトごとに書く必要がある
export const getKeyUserStatus = (
  statusVal: typeof UserStatusValue[keyof typeof UserStatusValue]
) => {
  switch (statusVal) {
    case UserStatusValue.non:
      return "non";
    case UserStatusValue.init:
      return "init";
    case UserStatusValue.active:
      return "active";
  }
};
const userStatusKey = getKeyUserStatus(2);
console.log(userStatusKey); // => active

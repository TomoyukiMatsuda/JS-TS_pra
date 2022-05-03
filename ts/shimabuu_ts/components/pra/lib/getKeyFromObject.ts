export const UserStatusValue = {
  init: 0,
  active: 1,
  non: 2,
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
  // ここの無理クリ感がある
  const convertedObj: Record<VALUE, KEY> = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );

  return convertedObj[val];
};

const key = getKeyByValue(UserStatusValue, 2);
console.log(key);
